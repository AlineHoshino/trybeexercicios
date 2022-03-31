//ex 1
use('superhero')
db.hero.find(
    { "aspects.height": { $lt: 180 } })

//ex 2 

use('superhero')
db.hero.countDocuments(
    { "aspects.height": { $lt: 180 } })


