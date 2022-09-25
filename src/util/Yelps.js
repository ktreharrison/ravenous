const apiKey = 'yL9Ak5W7EWYzY3vfpL2nRLO6-ALew7hd3LSx1oEPPt5JJSPwED2XdgWueRWEQMasGwL6EjYOfKsmzG64tkwCnaHsKAejh2bngn-MW8K-lP9gH7v_nHyuwAK58nswY3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }).then((response) => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url, 
                        name: business.name,     
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
               }) 
            }
        })

 }
}

export default Yelp