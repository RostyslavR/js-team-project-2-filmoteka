!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},t=e.parcelRequired849;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){i[e]=r},e.parcelRequired849=t);var n=t("4lZAI"),o=t("66NcD"),s=t("3V0Mm"),a=t("j1lrD");s.refs.filter.addEventListener("click",(async function(e){if(!e.target.closest("input"))return;(0,a.showSpinner)(s.refs.spinner);try{await(0,n.renderMovies)()}catch(e){console.error(e)}finally{(0,a.hideSpinner)(s.refs.spinner)}})),async function(){try{await(0,o.initGenres)()}catch(e){console.error(e)}}();var d=t("9NMJY"),l=(s=t("3V0Mm"),t("bPhZY")),c=t("1g6CO");n=t("4lZAI");s.refs.gallery.addEventListener("click",(async function(e){const r=e.target.closest(".gallery__item");if(!r)return;const i=r.dataset.movieid;try{const{isWatched:e,isQueued:r,movieDetails:t}=await l.dbFirebase.getMovie({userId:c.user.uid,movieId:i});l.dbFirebase.cachedMovie={userId:c.user.uid,isWatched:e,isQueued:r,movieDetails:t},(0,d.openModal)(t,{movie_id:t.id,fotoUrl:"https://image.tmdb.org/t/p/w500"}),(0,n.updateBtnStatus)()}catch(e){console.error(e)}})),t("blm6R"),t("kvep9"),t("i8Q71"),t("1g6CO"),t("9ZZxa")}();
//# sourceMappingURL=myLibrary.6dd0bc8c.js.map