export function get_r2r(origin, destination, currencyCode, callback) {
    return fetch(`api/r2r/${origin}/${destination}/${currencyCode}`)
        // .then(d => {
        //     console.log(d)
        //     return d
        // })
        .then(res => res.json())
        .then(data => {
            // console.log(data) // for debugging

            let routes = []

            for (let r of data.routes) {
                // console.log(r)  //For debugging

                let route = {
                    duration: r.totalDuration,
                    price: (r.indicativePrices)?r.indicativePrices[0].price:"-", //If price is unknown, set to "-".
                    currency: (r.indicativePrices)?r.indicativePrices[0].currency:"", //If no price, set currency to empty string.
                    segments: []
                }

                for (let s in r.segments) {
                    let segment = {
                        transport: data.vehicles[r.segments[s].vehicle].name,
                        from: data.places[r.segments[s].depPlace].shortName,
                        to: data.places[r.segments[s].arrPlace].shortName,
                        price: (r.segments[s].indicativePrices)?r.segments[s].indicativePrices[0].price : "-",
                        currency: (r.segments[s].indicativePrices)?r.segments[s].indicativePrices[0].currency:"",
                        duration: r.segments[s].transitDuration,
                        index: s
                    }

                    route.segments.push(segment)
                }

                routes.push(route)
            }
            return({
                "routes": routes,
                "start": data.places[0].longName,
                "dest": data.places[1].longName
            })
    
        })
        .then(callback || (d => d))
        .catch(console.error)
}