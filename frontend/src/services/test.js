export const getOpenai = async (prompt) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      message: prompt,
      id: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const response = await fetch("http://localhost:4242/openAPI", options)
    const data = await response.json()

    // Ajoutez le prompt ici si nécessaire
    // addPrompt("receive", data.choices[0].message.content)
    // console.log(data)
    return data.choices[0].message.content
  } catch (error) {
    console.error(error)
    // Gérez l'erreur ici si nécessaire
    return null // Retournez une valeur par défaut ou null en cas d'erreur
  }
}

export const conversType = [
  {
    convers: "Salut t'as pas une carotte à dépanne ?",
    lu: false,
  },
  {
    convers: "Oui, j'en ai une. Où es-tu ?",
    lu: false,
  },
  {
    convers: "J'ai besoin d'un tournevis, tu en as un ?",
    lu: false,
  },
  {
    convers: "Désolée, je n'en ai pas. Essaye chez Paul.",
    lu: true,
  },
  {
    convers: "Salut, ça va bien ?",
    lu: true,
  },
  {
    convers: "Oui, ça va. Comment ça se passe chez toi ?",
    lu: true,
  },
  {
    convers: "Pas mal, mais il fait vraiment chaud aujourd'hui !",
    lu: true,
  },
  {
    convers: "Oui, c'est vrai. Prends soin de toi !",
    lu: true,
  },
  {
    convers: "Merci, toi aussi !",
    lu: true,
  },
  {
    convers: "Salut tout le monde !",
    lu: true,
  },
]
