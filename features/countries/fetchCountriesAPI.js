export async function fetchCountriesAPI () {
  try {
    const result = await fetch(
      `https://restcountries.com/v2/all?fields=name,region,flag`
    )
    const data = await result.json()

    return data
  } catch (error) {
    return { notFound: true }
  }
}
