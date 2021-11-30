export interface NetflixModel {
    nav: Nav;  //Navegador correspondiente a logotipo y título
    hero: Hero; //Los 5 más populares hoy
    comedy: Comedy; // Comedias
    drama: Drama; // Drama (peliculas basadas en libros)
}

export interface Nav {   
    title: string;
    logo: Img;  //logotipo Warner
}

export interface Img {  //se define img que se utilizará en la galería
    src: string;      
    alt: string;
}

export interface Hero {    //corresponde a los 5 más populares hoy
    title: string;         // título: Los 5 más populares hoy
    gallery: Img[];    //galeria de los 5 más populares hoy
}

export interface Comedy {   // Corresponde a Comedias
    title: string;            //titulo: Comedia
    gallery: Img[]   //galería de las pelis de comedia
}

export interface Drama {     // Corresponde a Dramas basados en libros
    title: string;       //títullo : Dramas basados en libros
    gallery: Img[]   // galería de las pelis de dramas basadas en libros
}



