import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `+212719558797`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
