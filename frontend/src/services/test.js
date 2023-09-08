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
