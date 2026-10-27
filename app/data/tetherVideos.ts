export interface TetherVideo {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  driveUrl: string;
  videoSrc: string;
  title: string;
  product: string;
  modelBadge: string;
  storyline: string[];
}

export const tetherVideos: TetherVideo[] = [
  {
    id: "on-chain",
    youtubeId: "JHf7DxQbaDY",
    youtubeUrl: "https://youtube.com/shorts/JHf7DxQbaDY?feature=share",
    driveUrl: "https://drive.google.com/file/d/120hrqJd12EIxPD4IR9BWHbAk97EtAFZ4/view?usp=drive_link",
    videoSrc: "/tether_videos/on_chain.mp4",
    title: "ON-CHAIN",
    product: "Hadron by Tether",
    modelBadge: "Self-Hosted LTX 2.5",
    storyline: [
      "Starts like a news interview. The anchor goes “so tokenization is… a nice idea?” and the old guy just laughs and says it’s going to swallow Wall Street whole. Then it cuts between random people. An archivist drowning in paper deeds, a bike courier in the rain, a rancher, a woman at a port, a minister. Each one gets one line. At the end a grandma looks at the camera and says “told you.”",
      "Every scene has a different person and that was on purpose. I wanted it to feel like everyone’s already talking about it. There’s a glowing glass cube that keeps coming back with a vineyard, a ship and a city inside it. That’s the visual thread.",
      "Voices came straight out of the model so the lip sync actually matches. Made on self-hosted LTX 2.5."
    ]
  },
  {
    id: "the-empty-vault",
    youtubeId: "qp0QrLMtyGU",
    youtubeUrl: "https://youtube.com/shorts/qp0QrLMtyGU?feature=share",
    driveUrl: "https://drive.google.com/file/d/1NdDcomHOT4WCEbLBNrpL9ZCcymA3mUPw/view?usp=drive_link",
    videoSrc: "/tether_videos/the_empty_vault.mp4",
    title: "The Empty Vault",
    product: "Tether Gold",
    modelBadge: "Self-Hosted LTX 2.5",
    storyline: [
      "So the setup is a kingdom about to get raided. The bad guy, Lord Mordred, finally gets into the royal vault and it’s empty. Not a single coin. Meanwhile the king is up on the tower, totally calm, because his gold was never in there. It’s on his phone. Tether Gold.",
      "I wanted this one to feel like an actual film and not a “AI video”, so I made my own character sheets first and built every shot from them so the faces wouldn’t change. Took a few rounds honestly. Early versions had sword fights that looked fake and a vault door that opened by itself lol, so I rethought those shots and kept things the model handles well.",
      "Everything was generated on LTX 2.5 running on my own setup. Edit, music and sound I did after."
    ]
  },
  {
    id: "the-rattle",
    youtubeId: "Ta88Z9AlYE0",
    youtubeUrl: "https://youtube.com/shorts/Ta88Z9AlYE0?feature=share",
    driveUrl: "https://drive.google.com/file/d/1pyIwtQDLVcm1D2HnuqTh6T7UecJVIzC1/view?usp=drive_link",
    videoSrc: "/tether_videos/the_rattle.mp4",
    title: "The Rattle",
    product: "Tether Gold",
    modelBadge: "Self-Hosted LTX 2.5",
    storyline: [
      "Dublin, 1912. A young violinist busking in the rain gets paid with one gold coin and drops it inside his violin for safekeeping. That coin rattles in there for the next hundred years. It goes with him through the Blitz, and later his grandson almost sells the violin in a New York pawn shop but hears the rattle and walks out. Today the grandson gives it to his granddaughter before her first big concert. She shakes it. Nothing. And then he shows her the gold is still there, just not in the violin anymore. It’s in Tether Gold.",
      "The violin was the whole idea really. A coin inside it makes a sound, so the family can literally hear their gold, and when it goes silent that’s the twist. I gave each time period its own look: sepia for 1912, black and white for the war, faded 70s colour, then warm and modern for today. The phone at the end is the real Tether app screen, comped in. All shots made on LTX 2.5, self-hosted."
    ]
  },
  {
    id: "the-price-tag",
    youtubeId: "x71xfFBvbIs",
    youtubeUrl: "https://youtube.com/shorts/x71xfFBvbIs?feature=share",
    driveUrl: "https://drive.google.com/file/d/1grnQKno6oGcDKpqr04Bbxuzj7guUtfX1/view?usp=drive_link",
    videoSrc: "/tether_videos/the_price_tag.mp4",
    title: "The Price Tag",
    product: "Tether USDT",
    modelBadge: "Google Flow",
    storyline: [
      "A little girl in Buenos Aires is saving up for a red bicycle. Each time she brings her coins to the shop, the owner sighs and puts a new price sticker on it. After a year, the stickers on the handlebar are piled up like a small book. Then her grandfather shows her USDT. Next visit, she pays before he can reach for another sticker.",
      "I got the idea after reading that the Argentine peso dropped more against the dollar last year than pretty much any other big currency. I didn’t want anyone in the film to say the word “inflation”, so the sticker pile does that job. You can watch it with the sound off and still get it. I made character sheets for everyone (and the bike) so nobody’s face changes between shots, and I used the shop window to show the seasons going by. Her two voice lines were made in one go so her voice stays the same.",
      "Everything was generated in Google Flow, and I did the edit, captions, music and sound myself."
    ]
  }
];
