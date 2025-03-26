import React, { useRef } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Antonio from "../../assets/stories/Antonio.jpg";
import Araceli from "../../assets/stories/Araceli.jpg";
import Concepcion from "../../assets/stories/Concepcion.jpg";
import Glendy from "../../assets/stories/Glendy.jpg";
import Leticia from "../../assets/stories/Leticia.jpg";
import Luisa from "../../assets/stories/Luisa.jpg";
import Rita from "../../assets/stories/Rita.jpg";
import Rosalba from "../../assets/stories/Rosalba.jpg";
import Ruth from "../../assets/stories/Ruth.jpg";
import Socorro from "../../assets/stories/Socorro.jpg";
import Teresa from "../../assets/stories/Teresa.jpg";
import Veronica from "../../assets/stories/Veronica.jpg";

const historyData = [
  {
    title: "Rosalba",
    date: "2010 - Fundadora",
    description:
      "Comenzó costurando y aprendiendo de manera autodidacta la difícil tarea de confeccionar un traje de baño. Su primera formación fue con la marca italiana “La Perla “, para la cual trabajó durante 10 años; el día de hoy es diseñadora graduada. Disfruta mucho de su tiempo en familia.",
    image: Rosalba,
  },
  {
    title: "Ruth",
    date: "2010 - Fundadora",
    description:
      "Diseñadora, directora, madre y esposa. En 2006, emprendió el sueño de diseñar trajes de baño y fundó la marca BAROCCO, que  desde  entonces es marca líder en el departamento de playa de    “El Palacio de Hierro”. Disfruta de compartir la vida en familia y del trabajo en compañía de otras mujeres.",
    image: Ruth,
  },
  {
    title: "Antonio",
    date: "2010 - Fundador",
    description:
      "Padre amoroso de dos hijas. Su formación en administración, así como en tiempos y procesos, ha sido clave para la existencia de FaroSur. Le gusta disfrutar en familia, ser guía en actividades de equipo y compartir sus valores con los jóvenes de su iglesia. Es generoso y buen escucha, determinado y paciente en tiempos difíciles. ",
    image: Antonio,
  },
  {
    title: "Socorro Canul",
    date: "2010",
    description:
      "Comenzó costurando desde muy pequeña y cuando creció tenía la ilusión de saber como era una fábrica. Le gustó aprender como hacer trajes de baño, aunque muchas veces sintió que no iba a lograrlo, no se rindió. Actualmente hace la labor de elasticado, que es una de las operaciones mas complicadas ya que requiere sensibilidad para llegar a las medidas y tensiones. ",
    image: Socorro,
  },
  {
    title: "Rita Cauich",
    date: "2010",
    description:
      "Aprendió corte y confección en la escuela secundaria y posterior se sumó al equipo de operadores que convocaba su hermana Rosalba para fundar Faro Sur. Tiene 4 hijos y disfruta de pasar tiempo en familia y estar cerca de sus nietos. Rita realiza operaciones de detalle para colocación de herrajes.",
    image: Rita,
  },
  {
    title: "Glendy Canul",
    date: "2010",
    description:
      "Creció al lado de sus abuelos y comenzó a trabajar a los 19 años cuando su abuelo enfermó. En la secundaria aprendió a costurar en los talleres de corte y confección y es un oficio que disfruta, además de que lo hace con mucha agilidad. Es una madre amorosa y su pequeño Luis Abraham está por cumplir 2 años. ",
    image: Glendy,
  },
  {
    title: "Leticia Uc",
    date: "2012",
    description:
      "Comenzó en el área de control y corte manual de encajes, después aprendió a costurar y actualmente es supervisora de línea y muestrista. Hace 15 años, conoció a Florentino quien también labora en Faro Sur y están por cumplir 8 años de casados. El día de hoy su pequeña hija Cristelle de 6 años alegra sus días. Lety confecciona los trajes y vestidos con que Cristell participa en el grupo de Jarana y ballet.",
    image: Leticia,
  },
  {
    title: "Luisa May",
    date: "2014",
    description:
      "Tomo cursos de confección en Hunucmá, pero tiene ganas de seguir aprendiendo. En su tiempo libre le gusta costurar y hacer ropa para su familia, en particular los pantalones de su esposo que es pescador. Sigue trabajando porque le gusta mucho costurar y tener sus propios recursos.",
    image: Luisa,
  },
  {
    title: "Teresa Solis",
    date: "2018",
    description:
      "La segunda de cinco hermanos. Su formación original es de estilismo, pero descubrió que disfruta mucho de hacer manualidades. Comenzó deshilando y el día de hoy es líder del área de control. Es mamá primeriza del un hermoso bebe de nombre Luciano que ya asiste a la guardería.",
    image: Teresa,
  },
  {
    title: "Verónica Balam",
    date: "2018",
    description:
      "Desde que era pequeña veía a su mamá bordar los hipiles en una maquina singer. Le gusta mucho el corte y la confección, le gustaría seguir aprendiendo. En sus ratos libres le gusta mucho ver las páginas de las marcas para las que costura y mirar como se ven las prendas terminadas. ",
    image: Veronica,
  },
  {
    title: "Concepción Mex",
    date: "2020",
    description:
      "Le gustan los retos y aprender cosas nuevas. Se ha especializado en costurar las copas que tienen grado de dificultad por las curvas en el armado. Es casada y mamá de tres hijos. Disfruta mucho de hacer su propia ropa y la de su familia. Se caracteriza por sonreír todo el tiempo.",
    image: Concepcion,
  },
  {
    title: "Araceli Solis",
    date: "2023",
    description:
      "Comenzó en el área de control trabajando con su hermana Tere y disfruta mucho del dúo que forman, apoyándose una a la otra para lograr objetivos. Es mamá de Leandro e Isabela. Ha sido difícil enfrentar la vida sola pero no se siente triste, sino al contrario es feliz cuando mira a sus hijos crecer unidos en familia.",
    image: Araceli,
  },
];

const HistoryCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#F8F7F5", px: { xs: 2, md: 8 } }} id="historia">
      <Typography
        variant="h3"
        sx={{ mb: 4, color: "#5A5147", textAlign: "right" }}
      >
        Historias
      </Typography>
      <Box
        sx={{
          position: "relative",
          maxWidth: "100%",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {historyData.map((item, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Card
                sx={{
                  boxShadow: "none",
                  textAlign: "left",
                  backgroundColor: "#F8F7F5",
                  mx: 1,
                }}
              >
                {/* Square image container */}
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1", // Ensures the Box is always square
                    overflow: "hidden",
                    borderRadius: 2,
                    position: "relative", // for older Safari you may need to use the padding-bottom hack
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black", fontSize:"16px", fontWeight:800}}>
                    {item.date}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", fontSize:"16px"}}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>

        {/* Botones de navegación */}
        <IconButton
          aria-label="Anterior"
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          aria-label="Siguiente"
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HistoryCarousel;
