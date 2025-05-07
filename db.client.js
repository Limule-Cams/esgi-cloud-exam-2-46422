const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log("✅ Connected to database");
    return sequelize.sync(); 
  })
  .catch((err) => {
    console.error(" Cannot connect to database:", err.message);
  });

module.exports = sequelize;
