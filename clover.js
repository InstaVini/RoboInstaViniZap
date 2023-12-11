const fs = require('fs')
const P = require('pino')
const { Boom } = require('@hapi/boom')
const fetch = require('node-fetch')
const chalk = require('chalk')
const { color } = require('./lib/color')
const moment = require('moment-timezone')
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const yts = require('yt-search');
const speed = require('performance-now')
const { banner, getGroupAdmins, getBuffer, getRandom, getExtension } = require('./lib/funções')
const { fetchJson } = require('./lib/fetcher')
const sotoy = JSON.parse(fs.readFileSync('./lib/sotoy.json'))
const configurações = JSON.parse(fs.readFileSync('./confing.json'))
const textobv = JSON.parse(fs.readFileSync('./lib/TextoDoBemvindo.json'))
const { convertSticker } = require("./lib/swm.js");
const ffmpeg = require('fluent-ffmpeg')
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios")
const linkfy = require('linkifyjs');
const anikit = require('trevo-api');
// Definições
const prefixo = configurações.prefix
const prefix = configurações.prefix
const nomeBot = configurações.nomeBot
const NomeDoBot = nomeBot
const nomeDono = configurações.nomeDono
const numeroDono = configurações.owner
const username = configurações.username_anikit
const key = configurações.key_anikit
const log = ["clover2.jpg"]
const im = log[Math.floor(Math.random() * log.length)];
const imagens = fs.readFileSync(`./${im}`)
const logo = imagens
let girastamp = speed()
let latensi = speed() - girastamp

const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
const { response } = require('express')


module.exports = client = async (client, info, settings, color) => {

  try {
    const altpdf = Object.keys(info.message)
    const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]
    global.prefixo
    const content = JSON.stringify(info.message)
    const from = info.key.remoteJid
    selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
    var body = (type === 'conversation') ?
      info.message.conversation : (type == 'imageMessage') ?
        info.message.imageMessage.caption : (type == 'videoMessage') ?
          info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
            info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
              info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ?
                info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
                  info.message.templateButtonReplyMessage.selectedId : ''
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefixo)
    const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
    const argsButton = selectedButton.trim().split(/ +/)
    bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : ''
    budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
    button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
    button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
    listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''
    var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
    bidy = budy.toLowerCase()

    const getFileBuffer = async (mediakey, MediaType) => {
      const stream = await downloadContentFromMessage(mediakey, MediaType)

      let buffer = Buffer.from([])
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
      }
      return buffer
    }

    const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
    const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const arg = body.substring(body.indexOf(' ') + 1)
    const argss = body.split(/ +/g)
    const testat = body
    const ants = body
    const isGroup = info.key.remoteJid.endsWith('@g.us')
    const tescuk = ['0@s.whatsapp.net']
    const q = args.join(' ')
    const sender = isGroup ? info.key.participant : info.key.remoteJid
    const pushname = info.pushName ? info.pushName : ''
    const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupDesc = isGroup ? groupMetadata.desc : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const text = args.join(' ')
    var isAntilink = isGroup ? antilink.includes(from) : false

    // Selos de verificado
    const ContatVR = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: `${pushname}` } } }
    const LiveVR = { key: { participant: '0@s.whatsapp.net' }, message: { liveLocationMessage: { displayName: `${pushname}` } } }
    const ImagenVR = { key: { participant: '0@s.whatsapp.net' }, message: { imageMessage: { displayName: `${pushname}` } } }
    const VideoVR = { key: { participant: '0@s.whatsapp.net' }, message: { videoMessage: { displayName: `${pushname}` } } }
    const DocVR = { key: { participant: '0@s.whatsapp.net' }, message: { documentMessage: { displayName: `${pushname}` } } }

    // Consts dono/adm etc...
    const quoted = info.quoted ? info.quoted : info
    const mime = (quoted.info || quoted).mimetype || ""
    const numeroBot = client.user.id.split(':')[0] + '@s.whatsapp.net'
    const isBot = info.key.fromMe ? true : false
    const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
    const isGroupAdmins = groupAdmins.includes(sender) || false
    const argis = bidy.trim().split(/ +/)
    const isOwner = sender.includes(numeroDono)
    const enviar = (texto) => {
      client.sendMessage(from, { text: texto }, { quoted: info })
    }
    const reply = (texto) => {
      client.sendMessage(from, { text: texto }, { quoted: info })
    }
    const participants = isGroup ? await groupMetadata.participants : ''

    const welkom = JSON.parse(fs.readFileSync('./lib/welkom.json'));
    const isWelkom = isGroup ? welkom.includes(from) : false

    // Consts isQuoted
    const isImage = type == 'imageMessage'
    const isVideo = type == 'videoMessage'
    const isAudio = type == 'audioMessage'
    const isSticker = type == 'stickerMessage'
    const isContact = type == 'contactMessage'
    const isLocation = type == 'locationMessage'
    const isProduct = type == 'productMessage'
    const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
    typeMessage = body.substr(0, 50).replace(/\n/g, '')
    if (isImage) typeMessage = 'Image'
    else if (isVideo) typeMessage = 'Video'
    else if (isAudio) typeMessage = 'Audio'
    else if (isSticker) typeMessage = 'Sticker'
    else if (isContact) typeMessage = 'Contact'
    else if (isLocation) typeMessage = 'Location'
    else if (isProduct) typeMessage = 'Product'
    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
    const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

    var msg = {
      espere: "agrade um momento...."
    }
    resposta = {
      espere: "[⚙️️]Aguarde...enviando ",
      aguarde: "[⚙️️]Aguarde...enviando ",
      dono: "[⚙️️]Esse comando so pode ser usado pelo meu dono!!! ",
      grupo: "[⚙️️]Esse comando só pode ser usado em grupo ",
      premium: "[⚙️️]comando so pra usuários premium",
      privado: "[⚙️️]Esse comando só pode ser usado no privado ",
      adm: "[⚙️️]Esse comando só pode ser usado por administradores de grupo",
      botadm: "[⚙️️]Este comando só pode ser usado quando o bot se torna administrador ",
      registro: `[⚙️️] Você não se registrou utilize ${prefix}rg para se registrar `,
      norg: "[⚙️️] Você ja está registrado ",
      erro: "[⚙️️] Error, tente novamente mais tarde ",
      menu: "aaaaa"
    }


    const isUrl = (url) => {
      if (linkfy.find(url)[0]) return true
      return false
    }
    if (isUrl(body) && isAntilink && isGroup && isBotGroupAdmins) {
      if (!isAntilink) return
      if (!isUrl(body)) return
      if (body.includes("http")) {
        if (!budy.includes("http")) return
        if (isBot) return
        linkgpp = await client.groupInviteCode(from)
        if (budy.match(`${linkgpp}`)) return reply('*Link do nosso grupo, não irei remover.. *')
        if (isGroupAdmins) return reply("*Link detectado, porém usuário é admin*")
        if (!JSON.stringify(groupMembers).includes(sender)) return
        client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
        client.groupParticipantsUpdate(from, [sender], 'remove')
      }
    }

    const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
    }

    if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'purple')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Comando:', 'yellow')} ${color(comando)}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)
    if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)
    if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Comando:', 'yellow')} ${color(comando)}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'cyan')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)
    if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'cyan')}\n${color('┃', 'cyan')} ${color('Número:', 'yellow')} ${color(sender.split('@')[0], 'magenta')}\n${color('┃', 'cyan')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'cyan')} ${color('Horário:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'cyan')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'cyan')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'cyan')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'cyan')}`)


    var command = comando
    switch (comando) {
      // COMANDOS COM PREFIXO COMEÇAM A PARTIR DAQUI!!! \\

      case 'ligacoesrevenda': {
  if (!isGroup) return reply(resposta.group);
  if (!isOwner) return reply(resposta.dono);
  
  // Obtém a lista de participantes do grupo
  let metadata = await client.groupMetadata(from);
  let participants = metadata.participants;
  
  // Constrói o texto mencionando todos os participantes
  let teks = `
\n ${participants.length ? participants.length : "undefined"} *Participantes desse grupo.*
\n ${args.join(" ") ? args.join(" ") : '👨‍💻 Mensagem de marcação para todos do grupo, feito pela *Empresa InstaVini'}*\n\n`;
  
  for (let mem of participants) {
    teks += `┃❖ @${mem.id.split('@')[0]}\n`;
  }

  // Envia a mensagem com a imagem e o texto para mencionar todos
  client.sendMessage(from, {
    image: fs.readFileSync('./ligacoesrevenda.jpeg'),
    caption: `🚀 *Explore o Futuro das Ligações Ilimitadas com a InstaVini!* 📞✨

*Você está pronto para revolucionar suas ligações?* A InstaVini acaba de lançar seu próprio sistema de ligações ilimitadas via aplicativo, e queremos que você experimente a inovação!

⬇️ *Demonstração da nossa interface para fazer as ligações:* ⬇️
https://ibb.co/Bsngw9P

⬇️ *Demonstração do nosso painel web:* ⬇️
https://ibb.co/qRGnzWd

✨ *Por que escolher a InstaVini?*

📱 Ligações ilimitadas durante 10 minutos no nosso teste grátis!
💻 Painel web exclusivo e intuitivo.
🔄 Renovação mensal do painel para garantir conectividade contínua.

🌟 *O que faz o nosso sistema se destacar?*

🌐 Totalmente legalizado e sem problemas.
🚀 Tecnologia avançada para a melhor experiência em ligações.

💥 *Como começar seu teste grátis?*

📲 *Entre em contato agora mesmo:* https://wa.me/+55511910499229 faça um teste gratuito de 10 minutos!
⏳ Desfrute de 10 minutos de ligações ilimitadas gratuitas.

🔒 *Seja parte da revolução da InstaVini!* Diga adeus aos limites e experimente o futuro das ligações com a InstaVini. Não perca tempo, *garanta seu teste grátis agora mesmo!* 🚀

👨🏻‍💻 *Entre em contato:* https://wa.me/+5511910499229\n\n${teks}`,
    mentions: participants.map(a => a.id)
  });
} break

case 'ligacoes': {
  if (!isGroup) return reply(resposta.group);
  if (!isOwner) return reply(resposta.dono);
  
  // Obtém a lista de participantes do grupo
  let metadata = await client.groupMetadata(from);
  let participants = metadata.participants;
  
  // Constrói o texto mencionando todos os participantes
  let teks = `
\n ${participants.length ? participants.length : "undefined"} *Participantes desse grupo.*
\n ${args.join(" ") ? args.join(" ") : '👨‍💻 Mensagem de marcação para todos do grupo, feito pela *Empresa InstaVini'}*\n\n`;
  
  for (let mem of participants) {
    teks += `┃❖ @${mem.id.split('@')[0]}\n`;
  }

  // Envia a mensagem com a imagem e o texto para mencionar todos
  client.sendMessage(from, {
    image: fs.readFileSync('./ligacoes.png'),
    caption: `✨ *LIGAÇÕES ILIMITADAS VIA APP* 📲

🚀 *SISTEMA PRÓPRIO DA INSTAVINI* 🚀

Fale à vontade para qualquer lugar do Brasil com nosso aplicativo de ligações ilimitadas.
📲 *InstaVini Ligações Ilimitadas.*

⚠️ *PODE FAZER UM TESTE GRATUITO DE 10 MINUTOS* ⚠️

✅ • Ligue para qualquer DDD
✅ • Converse a vontade
✅ • Celular e fixo
✅ • Sem fidelidade
✅ • APP Android e WEB

Através do nosso aplicativo você poderá ligar para onde quiser e conversar à vontade com seus amigos, familiares, e várias outras pessoas!

🚀 *_Utilize o sistema próprio e 100% legalizado da InstaVini para desfrutar de comunicações ilimitadas com total confiança e segurança._* 🚀

(( *Abrimos painel para revenda também para quem deseja revender ligações.* ))

⬇️ _Atualizações sobre as nossas ligações:_
https://whatsapp.com/channel/0029Va9DXW82Jl8IV16SOj47

⬇️ Maiores informações ⬇️
https://wa.me/+5511910499229\n\n${teks}`,
    mentions: participants.map(a => a.id)
  });
} break

      case 'gerarlink':
      case 'imgpralink':
      case "telegra.ph":
        try {
          if (isQuotedImage) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadImageToTelegraph(imageBuffer) {
              const form = new FormData();
              form.append('file', imageBuffer, { filename: 'image.jpg' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "image");
            const imageUrl = await uploadImageToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque a ft')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break

      case 'tagall':
      case 'marcar': {
        if (!isGroup) return reply(resposta.group)
        if (!isOwner) return reply(resposta.dono)
        let metadata = await client.groupMetadata(from)
        let teks = `
\n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
\n ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
        for (let mem of participants) {
          teks += `┃❖ @${mem.id.split('@')[0]}\n`
        }
        client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: info })
      }
        break

      case 'videourl':
      case 'videopralink':
        try {
          if (isQuotedVideo) {
            boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
              : info.message.videoMessage;
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadVideoToTelegraph(videoBuffer) {
              const form = new FormData();
              form.append('file', videoBuffer, { filename: 'media' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "video");
            const imageUrl = await uploadVideoToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque o video')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break

      case 'totag':
      case 'cita':
      case 'hidetag':
        if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
        if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
        if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
        if (q.includes("=>") || q.includes(">")) return
        membros = (groupId, membros1) => {
          array = []
          for (let i = 0; i < membros1.length; i++) {
            array.push(membros1[i].id)
          }
          return array
        }
        var yd = membros(from, groupMembers)
        if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
          media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          img = await getFileBuffer(media, 'sticker')
          fs.writeFileSync(rane, img)
          fig = fs.readFileSync(rane)
          var options = {
            sticker: fig,
            mentions: yd
          }
          client.sendMessage(from, options)
        } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
          media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          img = await getFileBuffer(media, 'image')
          fs.writeFileSync(rane, img)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
          media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          vid = await getFileBuffer(media, 'video')
          fs.writeFileSync(rane, vid)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
          media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          aud = await getFileBuffer(media, 'audio')
          fs.writeFileSync(rane, aud)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info })
        } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
          media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
          rane = getRandom('.' + await getExtension(media.mimetype))
          doc = await getFileBuffer(media, 'document')
          fs.writeFileSync(rane, doc)
          buff = fs.readFileSync(rane)
          client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info })
        } else if (budy) {
          if (q.length < 1) return reply('Citar oq?')
          client.sendMessage(from, { text: body.slice(command.length + 2), mentions: yd })
        } else {
          reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
        }
        break

      case 'reviver':
      case 'add':
        if (!isGroup) return reply('🌸COMANDO SO PARA GRUPO🌸')
        if (!isOwner) return reply(resposta.dono)
        if (!isGroupAdmins) return reply('😂COMANDO SO PARA ADM😂')
        if (!isBotGroupAdmins) return reply("🌸BOT PRECISA SER ADM🌸")
        if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('🌸MARQUE A MENSAGEM DO USUÁRIO PRA MIM ADICIONA🌸')
        response2 = await client.groupParticipantsUpdate(from, [menc_prt], "add")
        reply('🌸USUÁRIO ADICIONADO COM SUCESSO 🌸')
        break

      case 'sairgp':
        if (isGroup && !isOwner && !info.key.fromMe) return reply("🌸COMANDO SO PARA DONO🌸")
        try {
          client.groupLeave(from)
        } catch (erro) {
          reply(String(erro))
        }
        break

      case 'abrirgp':
      case 'fechagp':
      case 'grupo':
        if (!isGroup) return reply(`SÓ EM GRUPO`)
        if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
        if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
        if (args[0] === 'a') {
          reply(`*GRUPO ABERTO COM SUCESSO*`)
          await client.groupSettingUpdate(from, 'not_announcement')
        } else if (args[0] === 'f') {
          reply(`*GRUPO FECHADO COM SUCESSO*`)
          await client.groupSettingUpdate(from, 'announcement')
        }
        break

      case 's':
      case 'stickergif':
      case 'sgif':
      case 'f':
      case 'figu':
      case 'st':
      case 'stk':
        {
          (async function () {
            var legenda = q ? q?.split("/")[0] : ` `
            var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
            if (isMedia && !info.message.videoMessage || isQuotedImage) {
              var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
              rane = getRandom('.' + await getExtension(encmedia.mimetype))
              buffimg = await getFileBuffer(encmedia, 'image')
              fs.writeFileSync(rane, buffimg)
              rano = getRandom('.webp')
              exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                fs.unlinkSync(rane)
                // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                var json = {
                  "sticker-pack-name": nomeDono,
                  "sticker-pack-publisher": nomeBot
                }
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                var exif = Buffer.concat([exifAttr, jsonBuff])
                exif.writeUIntLE(jsonBuff.length, 14, 4)
                let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                fs.writeFileSync(`./${nomemeta}`, exif)
                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                  client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                  fs.unlinkSync(nomemeta)
                  fs.unlinkSync(rano)
                })
              })
            } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
              var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
              rane = getRandom('.' + await getExtension(encmedia.mimetype))
              buffimg = await getFileBuffer(encmedia, 'video')
              fs.writeFileSync(rane, buffimg)
              rano = getRandom('.webp')
              await ffmpeg(`./${rane}`)
                .inputFormat(rane.split('.')[1])
              exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                fs.unlinkSync(rane)
                let json = {
                  "sticker-pack-name": legenda,
                  "sticker-pack-publisher": autor
                }
                let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                let exif = Buffer.concat([exifAttr, jsonBuff])
                exif.writeUIntLE(jsonBuff.length, 14, 4)
                let nomemeta = "temp.exif"
                fs.writeFileSync(`./${nomemeta}`, exif)
                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                  client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                  fs.unlinkSync(nomemeta)
                  fs.unlinkSync(rano)
                })
              })
            } else {
              reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
            }
          })().catch(e => {
            console.log(e)
            reply("Hmm deu erro")
            try {
              if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
              if (fs.existsSync(rano)) fs.unlinkSync(rano);
              if (fs.existsSync(media)) fs.unlinkSync(media);
            } catch { }
          })
        }
        break


      case 'rename':
      case 'roubar':
        if (!isQuotedSticker) return reply('Marque uma figurinha...')
        encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
        var kls = q
        var pack = kls.split("/")[0];
        var author2 = kls.split("/")[1];
        if (!q) return reply('*E o autor e o nome do pacote?*')
        if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
        if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
        bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
        var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
        var sti = new Buffer.from(mantap, 'base64');
        client.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pack}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
          .catch((err) => {
            reply(`❎ Error, tenta mais tarde`);
          })
        break

      case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
        if (!isOwner) return reply(resposta.dono)
        if (!q) return reply(`Texto onde?\n\nExemplo : ${prefix + command} BOM DIA `)
        let getGroups = await client.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let anu = groups.map(v => v.id)
        for (let i of anu) {
          await delay(150)
          let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
          client.sendMessage(i, { text: txt })
        }
        reply(`Enviando com sucesso `)
      }
        break;

      default:
        if (isCmd && command) {
          const buttonMessage = {
            text: `Comando não existe nesse bot.`,
            //   footer: '𝙻𝚎𝚒𝚊 𝚘 𝚖𝚎𝚗𝚞 𝚌𝚘𝚖 𝚊𝚝𝚎𝚗𝚌̧𝚊̃𝚘!',
            headerType: 1
          }
          client.sendMessage(from, buttonMessage)
        }

    }
    // Fim do switch \\

  } catch (erro) {
    console.log(erro)
  }
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update file: ${__filename}`);
  delete require.cache[file];
  require(file);
});