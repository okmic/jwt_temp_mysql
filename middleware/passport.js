const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const jwtConfig = require('./../config').jwt
const db = require('./../settings/db')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtConfig
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, (payload, done) => {
            try {
                db.all("select `id`, `email` from `users` where `id` = '"+ payload.id +"'", (err, result) => {
                    if(err) {
                        console.error(err)
                    } else {
                        const user = result
                        if (user) {
                            done(null, user)
                        } else {
                            done(null, false)
                        }
                    }
                } )
            }
            catch (e) {
                console.error(e)
            }
        })
    )
}