<template>
  <div class="base-div">
    <h1>Contact</h1>

    <ul>
      <li><p>email</p> <p><a href="mailto:eli@etd.is">eli@etd.is</a></p></li>
      <li><p>phone</p> <p><a href="tel:+18082008440">+1 808 200 8440</a></p></li>
    </ul>

    <h2>messaging</h2>
    <ul>
      <li><icon data="@/assets/icons/kakaotalk.svg" width="200" height="200" original/>
        <div><p>KakaoTalk</p> <p>dteli</p></div>
      </li>
      <li><icon data="@/assets/icons/messenger.svg" width="200" height="200" original/>
        <div><p>Messenger</p> <p><a href="https://www.messenger.com/t/etdru" target="_blank">etdru</a></p></div>
      </li>
      <li><icon data="@/assets/icons/telegram.svg" width="200" height="200" original/>
        <div><p>Telegram</p> <p><a href="https://t.me/etdru" target="_blank">@etdru</a></p></div>
      </li>
      <li><icon data="@/assets/icons/signal.svg" width="200" height="200" original/>
        <div><p>Signal</p> <p>(tied to phone number)</p></div>
      </li>
    </ul>

    <h2>professional</h2>
    <ul>
      <li><icon data="@/assets/icons/github.svg" width="200" height="200" original/>
        <div><p>GitHub</p> <p><a href="https://github.com/etdr">etdr</a></p></div>
      </li>
      <li><icon data="@/assets/icons/linkedin.svg" width="200" height="200" original/>
        <div><p>LinkedIn</p> <p><a href="https://www.linkedin.com/in/etdrumm/" target="_blank">etdrumm</a></p></div>
      </li>
    </ul>

    <h2>social</h2>
    <ul>
      <li><icon data="@/assets/icons/twitter.svg" width="200" height="200" original/>
        <div><p>Twitter</p> <p><a href="https://twitter.com/etd__" target="_blank">@etd__</a></p></div>
      </li>
      <li><icon data="@/assets/icons/facebook.svg" width="200" height="200" original/>
        <div><p>Facebook</p> <p><a href="https://www.facebook.com/etdru/" target="_blank">etdru</a></p></div>
      </li>
      <li><icon data="@/assets/icons/youtube.svg" width="200" height="200" original/>
        <div><p>YouTube</p> <p><a href="https://www.youtube.com/c/EliTDrumm" target="_blank">eliium</a></p></div>
      </li>
      <li><icon data="@/assets/icons/steam.svg" width="200" height="200" original/>
        <div><p>Steam</p> <p><a href="https://steamcommunity.com/id/etdru" target="_blank">etdru</a></p></div>
      </li>
    </ul>

    <h2>music</h2>
    <ul>
      <li><icon data="@/assets/icons/discogs.svg" width="200" height="200" original/>
        <div><p>Discogs</p> <p><a href="https://www.discogs.com/user/etdr" target="_blank">etdr</a></p></div>
      </li>
      <li><icon data="@/assets/icons/spotify.svg" width="200" height="200" original/>
        <div><p>Spotify</p> <p><a href="https://open.spotify.com/user/dte.li" target="_blank">dte.li</a></p></div>
      </li>
      <li><icon data="@/assets/icons/lastfm.svg" width="200" height="200" original/>
        <div><p>Last.fm</p> <p><a href="https://www.last.fm/user/eliium" target="_blank">eliium</a></p></div>
      </li>
      <li><icon data="@/assets/icons/soundcloud.svg" width="200" height="200" original/>
        <div><p>SoundCloud</p> <p><a href="https://soundcloud.com/etdru" target="_blank">etdru</a></p></div>
      </li>
      <li><icon data="@/assets/icons/bandcamp.svg" width="200" height="200" original/>
        <div><p>Bandcamp</p> <p><a href="https://bandcamp.com/chrtrx" target="_blank">chrtrx</a></p></div>
      </li>
    </ul>

    <h2>I am also on</h2>
    <ul>
      <li><icon data="@/assets/icons/discord.svg" width="200" height="200" original/>
        <div><p>Discord</p> <p>(I will join your Discord server)</p></div>
      </li>
      <li><icon data="@/assets/icons/slack.svg" width="200" height="200" original/>
        <div><p>Slack</p> <p>(I will join your Slack channel)</p></div>
      </li>
    </ul>

    <h2>PGP</h2>
    <p><a href="../assets/aanvullend/etd.asc">etd.asc</a></p>
    <p><pre>B101 B1B3 0ACB E368 B53B</pre>
       <pre>D8BF 86EB AE8D FB9C 32CF</pre></p>

    <h2>defunct</h2>
    <ul>
      <li><icon data="@/assets/icons/instagram.svg" width="200" height="200" original/>
        <div><p>Instagram</p> <p><a href="https://www.instagram.com/__etd__/" target="_blank">@__etd__</a></p></div>
      </li>
      <li><icon data="@/assets/icons/vimeo.svg" width="200" height="200" original/>
        <div><p>Vimeo</p> <p><a href="https://vimeo.com/atsuo">atsuo</a></p></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import kakaotalkIcon from '@/assets/icons/kakaotalk.svg'

// console.log(kakaotalkIcon)

export default Vue.extend({
  name: 'Contact'
  // data: () => ({
  //   // kakaotalkIcon
  // })
})
</script>

<style lang="scss" scoped>
@use '../css/vars' as v;

ul {
  // display: flex;
  list-style-type: none;
  padding: 0;
  // flex-wrap: wrap;
  margin: 1rem 0 6rem;

  li {
    display: flex;
    flex-direction: row;
    margin: 1rem 0 4rem;
    // border-bottom: solid 2px v.$k-black;
    border: solid 2px v.$k-lightgray;
    border-radius: 10px;
    padding: 2rem;
    // box-shadow: 1rem 1rem 0 v.$k-black;

    div {
      margin: 0 0 0 4rem;
      height: 200px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    p {
      padding: 1rem 2rem;
      margin: 0;
      font-size: 5rem;
      flex-grow: 1;
      vertical-align: middle;
      height: 100px;
    }

    p+p {
      background-color: v.$k-black;
      color: v.$k-white;
      font-style: italic;

      a {
        color: v.$k-blue;
        text-decoration: none;
        vertical-align: middle;
      }
    }
  }
}
</style>
