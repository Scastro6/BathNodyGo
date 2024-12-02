import app from './app.js'; 
import sequelize from './src/config/database.js'; 

async function main() {
  try {
    const init = process.argv[2]; 

    if (init === 'init') {
      await sequelize.sync({ force: true }); 
      console.log('Database synchronized with force: true (all data deleted and recreated)');
    } else {
      await sequelize.sync({ force: false }); 
      console.log('Database synchronized without force (existing data preserved)');
    }

    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  } catch (error) {
    console.error('Error synchronizing the database or starting the server:', error);
  }
}

main();