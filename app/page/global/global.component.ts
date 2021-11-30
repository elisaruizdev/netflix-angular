import { Component, OnInit } from '@angular/core';
import { NetflixModel } from './models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  public netflixModel: NetflixModel //a nivel global hay que ponerlo público


  constructor() {  //para construir los datos de la interfaz
    this.netflixModel = {
      nav: {
        title: "",
        logo: {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
          alt: "Logo Warner",
        },
      },

      hero: {
        title: "Las 5 más populares hoy",
        gallery: [
          {
            src: "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfnnKEA4WoZaHZrDyEJfRZq7yCZ2ORiCrLUCz0vuRUI0MLqGob0ecjE2wUksmE-xFkbSPy2-cvUdwYxGr8KcmstJHwID.jpg?r=6f4",
            alt: "Paquita Salas",
          },
          {
            src: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSzubTdJE5L7mLttKAkae0PbIo_WU8YfJysmw5HhcCNZ9tqxbxxQKAAcdrOHLFsqbCW06KI1XI5FW8wIqVI998b_Dpnh.jpg?r=d63",
            alt: "Merlí",
          },
          {
            src: "https://gcdn.lanetaneta.com/wp-content/uploads/2020/07/La-serie-britanica-Skins-dejara-Netflix-en-agosto-de-2020.jpg",
            alt: "Skins",
          },
          {
            src: "https://i2.wp.com/salta4400.com/wp-content/uploads/2020/02/cropped-Atypical.jpg?fit=1280%2C720&ssl=1",
            alt: "Atypical",
          },
          {
            src: "https://wallpaperaccess.com/full/5650455.png",
            alt: "Alice in Borderland",
          },
         ],
      },
      comedy: {
        title: "Comedia",
        gallery: [
          {
            src: "https://uploads-ssl.webflow.com/5dc89f2211520ee16aeeb15a/5eb3402b5299a1244783c78c_modern%20family.jpg",
            alt: "Modern Family",
          },
          {
            src: "https://flixwatch.co/wp-content/uploads/81078393.jpg",
            alt: "Moxie!",
          },
          {
            src: "https://1.bp.blogspot.com/-WEWtshGljzI/XfvP1osHVGI/AAAAAAAAPUE/q_XkVsg9umsAPm_eGhXUngNI9gtFo5xIwCLcBGAsYHQ/s1600/Russian%2BDoll.jpg",
            alt: "Muñeca Rusa",
          },
          {
            src: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQfsOfhagn_bPc7qjDTWsVINMeVuq0JCMM8e_B847B2SRVutqkagcPpK0jOupkfYa7W8lGKt4qb6AeUR-7SqwowWVjHt.jpg?r=13a",
            alt: "The Good Place",
          },
          {
            src: "https://occ-0-999-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcvka85O5A7fNfNDlHnTiPBcnJVGboHJFgaXZHm08xL7wvqHEpWYwL_ZgJxg420d9WKnhRKAKCaTaadV6bWMmiONOH1O.jpg?r=961",
            alt: "Vis a Vis",
          },
        ],
      },
      drama: {
        title: "Drama",
        gallery: [
          {
            src: "https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUUSDTXwggf2lhWxcC736qdkbNXRxJmyXpVNMqNcxDpzn7N_Lp9SyPpOWQ3v1iE4kSfyTAbERffvPlLtgjUHtxhOISNS.jpg?r=281",
            alt: "Alguien tiene que morir",
          },
          {
            src: "https://i.ytimg.com/vi/q4IS61_acuA/maxresdefault.jpg",
            alt: "Jóvenes Altezas",
          },
          {
            src: "https://noescinetodoloquereluce.com/wp-content/uploads/2020/11/gambito-de-dama-2.jpg",
            alt: "Gambito de Dama",
          },
          {
            src: "https://occ-0-2433-999.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUm3a5AE5Jkr0ayVJcsqj7DcTkGZ-eOJ1iNtpNO_iImNodQM3uJMlTZaGaqvIjdRhE96teXoqmQFvVQldfzRSp7mJwbA.jpg?r=685",
            alt: "Death Note",
          },
          {
            src: "https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYgfO2scOfdVA47hPlnpON0BBAFEnfL8759JzW6p2sifIP8iY2SlzoOg4FAdQEct6zZAJes3UcR4sL-eGEFR0vs3WmopYweJFOutT7PoDGivVDeSdUlALFy138Xs48H5.jpg?r=cbc",
            alt: "Black Mirror Bandersnatch",
          },
        ],
      },
    };
  } 
           

  ngOnInit(): void {}
  }

