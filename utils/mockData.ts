type usersProp = {
    name: string,
    age: number,
    access: {
        email: string,
        password: string,
    },
    profilePicture: string
}[]

export const focusHealthImages: any = {
  "1": require("../assets/images/1.png"),
  "2": require("../assets/images/2.png"),
  "3": require("../assets/images/3.png"),
}

export const foodImages:any = {
  "1": require("../assets/images/fav1.png"),
  "2": require("../assets/images/fav2.png"),
  "3": require("../assets/images/fav3.png"),
  "4": require("../assets/images/fav4.png")
}

type focusHealthProp = {
    title: string,
    image: string,
    tags: string[],
    min: number
}[]

export const users:any = [
    {
        name: "Moisés Sebastião",
        age: 20,
        access: {
            email: "moisessebastiao2005@gmail.com",
            password: "12345"
        },
        profilePicture: "../assets/images/perfil.png"
    }
]

export const focusHealth: focusHealthProp = [
  {
    title: "A importância da tabela nutricional na alimentação consciente",
    image: "1",
    tags: ["Bem-estar", "Nutrição"],
    min: 5
  },
  {
    title: "Tabelas nutricionais: desvendando os segredos por trás dos rótulos",
    image: "2",
    tags: ["Educação alimentar"],
    min: 3
  },
  {
    title: "A importância da tabela nutricional na alimentação consciente",
    image: "3",
    tags: ["Educação alimentar"],
    min: 4
  },
]

export const foods: any = [
  {
    title: "Salada Variada",
    protein: 15.13,
    grams: 18.40,
    image: "1",
  },
  {
    title: "Frango Grelhado",
    protein: 30.25,
    grams: 22.80,
    image: "2"
  },
  {
    title: "Omelete de queijo e espinafre",
    protein: 20.50,
    grams: 10.30,
    image: "3",
  },
  {
    title: "Panqueca de aveia e banana",
    protein: 8.75,
    grams: 40.20,
    image: "4"
  },
]
