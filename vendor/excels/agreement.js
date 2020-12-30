import Excel from 'exceljs'

export default async function (template, drivers) {
  const wb = new Excel.Workbook();
  await wb.xlsx.load(template)
  console.log(drivers)
  const ws = wb.getWorksheet('main')

  drivers.sort((a, b) => a.shortName === b.shortName ? 0 : a.shortName < b.shortName ? -1 : 1)
    .forEach((driver, index) => {
    ws.getCell(3 + index % 48, 2 + 4 * (Math.floor(index / 48))).value = driver.num.slice(3)
    ws.getCell(3 + index % 48, 3 + 4 * (Math.floor(index / 48))).value = driver.shortName
  })

  return await wb.xlsx.writeBuffer()
}