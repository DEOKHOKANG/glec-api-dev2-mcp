import { Router, Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     tags: [System]
 *     summary: System health check
 *     responses:
 *       200:
 *         description: System is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 database:
 *                   type: string
 *                   example: "connected"
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    // Test database connection if configured
    let databaseStatus = 'not_configured';
    
    if (process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY) {
      const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
      );
      
      try {
        const { error } = await supabase.from('health_check').select('*').limit(1);
        databaseStatus = error ? 'disconnected' : 'connected';
      } catch (err) {
        databaseStatus = 'disconnected';
      }
    }
    
    res.json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      database: databaseStatus
    });
  } catch (error) {
    res.status(503).json({
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      error: 'Health check failed'
    });
  }
});

export { router as healthRouter };