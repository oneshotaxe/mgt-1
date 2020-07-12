import Excel from 'exceljs'
import Cursor from '@/vendor/excels/Cursor'

export default async function (magazine) {
  const pageCount = magazine.pages.length

  const wb = new Excel.Workbook()
  const ws_left = wb.addWorksheet('Left', {
    pageSetup: {
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: pageCount,
      paperSize: 9,
      horizontalCentered: true,
      verticalCentered: true,
      margins: {
        left: 0.2, right: 0.2,
        top: 0.2, bottom: 0.2,
        header: 0, footer: 0
      },
      printArea: 'A1:Q' + 49 * pageCount
    }
  })
  const ws_right = wb.addWorksheet('Right', {
    pageSetup: {
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: pageCount,
      paperSize: 9,
      horizontalCentered: true,
      verticalCentered: true,
      margins: {
        left: 0.2, right: 0.2,
        top: 0.2, bottom: 0.2,
        header: 0, footer: 0
      },
      printArea: 'A1:W' + 49 * pageCount
    }
  })

  renderLeftWS(new Cursor(ws_left), magazine.pages)
  renderRightWS(new Cursor(ws_right), magazine.pages)

  return await wb.xlsx.writeBuffer()
}

function renderLeftWS(cursor, pages) {
  cursor.setColumnWidth([9, 28, 11, 9].concat(new Array(13).fill(4)))

  for (let i = 0; i < pages.length; i++) {
    renderLeftPage(cursor.createCursor(1 + 49 * i, 1), pages[i])
  }
}

function renderLeftPage(cursor, page) {
  cursor.setRowHeight(new Array(49).fill(18.75))

  cursor.getArea(1, 1, 49, 17).forEach(cell => {
    cell.alignment = {
      vertical: 'middle',
      horizontal: 'center'
    }
  })

  renderLeftHeader(cursor.createCursor(8, 1))
  for (let i = 0; i < 5; i++) {
    renderLeftBus(cursor.createCursor(10 + i * 8, 1), page.buses[i])
  }
}

function renderLeftHeader(cursor) {
  // merges
  new Array(
    [1, 1, 2, 1],
    [1, 2, 2, 2],
    [1, 3, 2, 3],
    [1, 4, 2, 4],
    [1, 5, 1, 17]
  ).forEach(pos => {
    cursor.mergeCells(pos[0], pos[1], pos[2], pos[3])
  })

  //font
  cursor.getArea(1, 1, 2, 17).forEach(cell => {
    cell.font = {
      size: 12
    }
  })

  //alignment
  cursor.getCell(1, 1).alignment.wrapText = true
  cursor.getCell(1, 3).alignment.wrapText = true

  //borders
  cursor.setBordersOnArea('medium', 1, 1, 2, 16)

  // content
  new Array(
    { pos: [1, 1], text: '№ автоб.' },
    { pos: [1, 2], text: 'Фамилия' },
    { pos: [1, 3], text: 'Таб. номер' },
    { pos: [1, 4], text: 'Роспись' },
    { pos: [1, 5], text: 'Календарные' },
  ).forEach(({ pos, text }) => {
    cursor.getCell(pos[0], pos[1]).value = text
  })

  new Array(12).fill(1).map((_, i) => i + 1).forEach(i => {
    cursor.getCell(2, 4 + i).value = i
  })
}

function renderLeftBus(cursor, bus) {
  cursor.mergeCells(1, 1, 8, 1)

  //font
  cursor.getArea(1, 1, 8, 17).forEach(cell => {
    cell.font = {
      size: 14
    }
  })

  //alignment
  cursor.getCell(1, 1).alignment.textRotation = 90

  //borders
  cursor.setBordersOnArea('thin', 1, 1, 8, 16)
  new Array(16, 4, 3, 2, 1).forEach(c => {
    cursor.setBordersAroundArea('medium', 1, 1, 8, c)
  })

  if (bus) {
    fillBusInfo(cursor.createCursor(), bus)
  }
}

function fillBusInfo(cursor, bus) {
  cursor.getCell(1, 1).value = bus.num

  const positions = getDriverPositionsByCount(bus.drivers.length)
  console.log(bus.drivers.length)
  positions.forEach((pos, i) => {
    fillLeftDriverInfo(cursor.createCursor(pos, 2), bus.drivers[i])
  })
}

function fillLeftDriverInfo(cursor, driver) {
  cursor.getCell(1, 2).value = driver.num
}

function renderRightWS(cursor, pages) {
  cursor.setColumnWidth(new Array(19).fill(4).concat([8, 8, 8, 8]))
}

function renderRightPage(cursor, page) {
  cursor.setRowHeight(new Array(49).fill(18.75))
}

function renderRightHeader(cursor) {

}

function renderRightBus(cursor, bus) {

}

function fillRightDriverInfo(cursor, driver) {

}

function fillWayInfo(cursor, way) {

}

function getDriverPositionsByCount(count) {
  switch (count) {
    case 1:
      return [5]
    case 2:
      return [3, 7]
    case 3:
      return [2, 5, 8]
    case 4:
      return [2, 4, 6, 8]
    default:
      return []
  }
}