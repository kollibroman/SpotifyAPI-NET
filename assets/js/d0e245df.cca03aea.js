"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[108],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=s(a),k=n,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},781:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),i={id:"artists",title:"Artists",sidebar_label:"Artists"},p=void 0,o={unversionedId:"web/artists",id:"version-5.1.1/web/artists",isDocsHomePage:!1,title:"Artists",description:"GetArtist",source:"@site/versioned_docs/version-5.1.1/web/artists.md",sourceDirName:"web",slug:"/web/artists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/artists",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/artists.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1643139030,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"artists",title:"Artists",sidebar_label:"Artists"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Albums",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/albums"},next:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/browse"}},s=[{value:"GetArtist",id:"getartist",children:[]},{value:"GetRelatedArtists",id:"getrelatedartists",children:[]},{value:"GetArtistsTopTracks",id:"getartiststoptracks",children:[]},{value:"GetArtistsAlbums",id:"getartistsalbums",children:[]},{value:"GetSeveralArtists",id:"getseveralartists",children:[]}],m={toc:s};function u(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getartist"},"GetArtist"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information for a single artist identified by their unique Spotify ID.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The Spotify ID for the artist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"},"FullArtist")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'FullArtist artist = _spotify.GetArtist("1KpCi9BOfviCVhmpI4G2sY");\nConsole.WriteLine()\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getrelatedartists"},"GetRelatedArtists"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The Spotify ID for the artist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"SeveralArtists")," object which contains the property ",(0,l.kt)("inlineCode",{parentName:"p"},"List<FullArtist> Artists")," (",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"},"FullArtist"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'SeveralArtists artists = _spotify.GetRelatedArtists("1KpCi9BOfviCVhmpI4G2sY");\nConsole.WriteLine(artists.Artists[0].Name);\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getartiststoptracks"},"GetArtistsTopTracks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information about an artist's top tracks by country.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The Spotify ID for the artist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"country"),(0,l.kt)("td",{parentName:"tr",align:null},"The country: an ISO 3166-1 alpha-2 country code."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"SeveralTracks")," object which contains the property ",(0,l.kt)("inlineCode",{parentName:"p"},"List<FullTrack> Tracks")," (",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#track-object-full"},"FullTrack"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'SeveralTracks tracks = _spotify.GetArtistsTopTracks("1KpCi9BOfviCVhmpI4G2sY", "DE");\nConsole.WriteLine(tracks.Tracks.Count); //How many tracks did we get?\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getartistsalbums"},"GetArtistsAlbums"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information about an artist's albums. Optional parameters can be specified in the query string to filter and sort the response.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The Spotify ID for the artist."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[type]"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of keywords that will be used to filter the response. If not supplied, all album types will be returned"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AlbumType.All"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"20"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the first album to return. Default: 0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Supply this parameter to limit the response to one particular geographical market"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#album-object-simplified"},"SimpleAlbum")," wrapped inside a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#paging-object"},"Paging-object")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'Paging<SimpleAlbum> albums = _spotify.GetArtistsAlbums("1KpCi9BOfviCVhmpI4G2sY", AlbumType.All);\nalbums.Items.ForEach(album => Console.WriteLine(album.Name));\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getseveralartists"},"GetSeveralArtists"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get Spotify catalog information for several artists based on their Spotify IDs.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs for the artists. Maximum: 50 IDs."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String>() { "1KpCi9BOfviCVhmpI4G2sY" } '))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"SeveralArtists")," object which contains the property ",(0,l.kt)("inlineCode",{parentName:"p"},"List<FullArtist> Artists")," (",(0,l.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"},"FullArtist"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'SeveralArtists artists = _spotify.GetSeveralArtists(new List<String>() {"1KpCi9BOfviCVhmpI4G2sY"});\nartists.Artists.ForEach(artist => Console.WriteLine(artist.Name));\n')),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);