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

type focusHealthProp = {
    title: string,
    image: string,
    tags: string[]
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
    tags: ["Bem-estar", "Nutrição"]
  },
  {
    title: "Tabelas nutricionais: desvendando os segredos por trás dos rótulos",
    image: "2",
    tags: ["Educação alimentar"]
  },
  {
    title: "A importância da tabela nutricional na alimentação consciente",
    image: "3",
    tags: ["Educação alimentar"]
  },
]
