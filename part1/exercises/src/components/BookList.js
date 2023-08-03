export default function BookList() {
   let pageTitle = "Books on My Reading List";
   let book1 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIFenStOniHWMmHT0j7SByrVHbugyxN5B9kF736S0nOdqaFmRA3piLKMU5uXsqWTUDgVY0RoNLUifp4sbkiQg87T_hsqPunYKFWNHyRfgtYoOQHE3fMo23vQ&usqp=CAc"
      let book2 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3mPMegf5JuzT84sBzHwA5tOI-c9Z0_K4P9izV3uwV7Tm5hRjMXYNBtdqtlXHvOU_ouyCiBKq3R7tR3ec35HAhGpoXoz86sbMfj3FTvLgxKvImT9a15sPD&usqp=CAc";
   let book3 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS5jeQFy16up9Spk0RGqduUEWrMzX5buuBsh0QgYd11GZe1gFCwvXY43ZE86k1-UlpZnSi98whBa5dYPh07sm9qaGLK3PRpMT7XxDocqP5TK5vznJ5IsqfH&usqp=CAc";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Matthew Perry's memoir" />
         <img src={book2} alt="Book called 'People I Want to Punch in the Throat" />
         <img src={book3} alt="Spilled Milk. A biographical book about childhood abuse" />
      </div>      
   );
}