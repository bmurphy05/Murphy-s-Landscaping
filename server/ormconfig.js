module.exports = [
    {
        name: 'production',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'ml-prod',
        synchronize: true,
        logging: false,
        dropSchema: false,
        entities: [
        "src/entity/**/*.ts"
        ],
        migrations: [
            "src/migration/**/*.ts"
        ],
        subscribers: [
            "src/subscriber/**/*.ts"
        ],
        cli: {
            entitiesDir: "src/entity",
            migrationsDir: "src/migration",
            subscribersDir: "src/subscriber",
        }
    },
    {
      name: 'development',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ml-dev',
      synchronize: true,
      logging: false,
      dropSchema: false,
      entities: [
      "src/entity/**/*.ts"
      ],
      migrations: [
         "src/migration/**/*.ts"
      ],
      subscribers: [
         "src/subscriber/**/*.ts"
      ],
      cli: {
         entitiesDir: "src/entity",
         migrationsDir: "src/migration",
         subscribersDir: "src/subscriber",
      }
    }
  ];
  