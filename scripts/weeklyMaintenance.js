import UserStatsService from '../components/utils/userStatsService.js';
import updateAllUserStats from './updateAllUserStats.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function runWeeklyMaintenance() {
    console.log('🚀 Starting weekly maintenance tasks...');
    console.log(`📅 ${new Date().toISOString()}`);
    
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URL);
        console.log('✅ Connected to MongoDB');

        // Task 1: Update all user stats with latest data
        console.log('\n📊 Task 1: Updating all user stats...');
        await updateAllUserStats();
        
        // Task 2: Clean up old stats (keep last 2 years)
        console.log('\n🧹 Task 2: Cleaning up old stats...');
        const deletedCount = await UserStatsService.cleanupOldStats(730); // 2 years
        console.log(`✅ Cleaned up ${deletedCount} old stats entries`);

        console.log('\n🎉 Weekly maintenance completed successfully!');
        
    } catch (error) {
        console.error('❌ Weekly maintenance failed:', error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log('📦 Database connection closed');
        process.exit(0);
    }
}

// Run the maintenance
runWeeklyMaintenance();