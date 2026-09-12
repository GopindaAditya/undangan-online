/**
 * Backend RSVP untuk undangan pernikahan — Google Apps Script (Web App)
 *
 * Cara pakai:
 * 1. Buat Google Sheet baru, buat sheet bernama "Wishes" dengan header di baris 1:
 *    id | timestamp | name | attendance | guests | message
 * 2. Buka Extensions > Apps Script, hapus isi default, tempel file ini.
 * 3. Deploy > New deployment > Web app.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Salin URL /exec yang diberikan, isi ke VITE_GAS_ENDPOINT di .env (frontend).
 */

const SHEET_NAME = 'Wishes';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'timestamp', 'name', 'attendance', 'guests', 'message']);
  }
  return sheet;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function sanitize_(text) {
  // Batasi panjang & buang karakter kontrol dasar, mencegah entri yang sangat panjang/rusak.
  return String(text || '').trim().slice(0, 500);
}

function doGet(e) {
  const action = e.parameter.action || 'list';

  if (action === 'list') {
    const sheet = getSheet_();
    const rows = sheet.getDataRange().getValues();
    const [, ...data] = rows; // buang header

    const wishes = data
      .filter((r) => r[0]) // baris dengan id
      .map((r) => ({
        id: r[0],
        timestamp: new Date(r[1]).toISOString(),
        name: r[2],
        attendance: r[3],
        guests: r[4],
        message: r[5],
      }))
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return jsonResponse_({ ok: true, data: wishes });
  }

  return jsonResponse_({ ok: false, error: 'Unknown action' });
}

function doPost(e) {
  const action = e.parameter.action;

  if (action === 'submit') {
    const name = sanitize_(e.parameter.name);
    const attendance = e.parameter.attendance === 'tidak_hadir' ? 'tidak_hadir' : 'hadir';
    const guests = Math.min(4, Math.max(1, parseInt(e.parameter.guests, 10) || 1));
    const message = sanitize_(e.parameter.message);

    if (!name || message.length < 2) {
      return jsonResponse_({ ok: false, error: 'Nama dan pesan wajib diisi.' });
    }

    const sheet = getSheet_();
    const id = Utilities.getUuid();
    const timestamp = new Date();
    sheet.appendRow([id, timestamp, name, attendance, guests, message]);

    return jsonResponse_({
      ok: true,
      data: { id, timestamp: timestamp.toISOString(), name, attendance, guests, message },
    });
  }

  return jsonResponse_({ ok: false, error: 'Unknown action' });
}
