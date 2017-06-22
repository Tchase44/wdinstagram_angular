# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Entry.create!([
    {
      author: "Jesse",
      photo_url: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?crop=entropy&dpr=2&fit=crop&fm=jpg&h=625&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300",
      body: "Notebooks notebooks notebooks."
    },
    {
      author: "Todd",
      photo_url: "https://images.unsplash.com/photo-1451444635319-e5e247fbb88d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=704d9fef9d122240e6e467de7755fc5c",
      body: "Smooch!"
    },
    {
      author: "Rudolph",
      photo_url: "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?crop=entropy&dpr=2&fit=crop&fm=jpg&h=625&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300",
      body: "I'm a deer."
    },
    {
      author: "Kanye",
      photo_url: "https://images.unsplash.com/photo-1451186859696-371d9477be93?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=e411657702f74285e7d2fd0edd79e535",
      body: "Just takin' some pics from space, nbd."
    }
])
