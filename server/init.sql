-- 초기 사용자 테이블 생성
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    age INT DEFAULT 30,
    height DECIMAL(5,2) DEFAULT 175.0,
    weight DECIMAL(5,2) DEFAULT 70.0,
    muscle DECIMAL(5,2) DEFAULT 30.0,
    fat_pct DECIMAL(5,2) DEFAULT 20.0,
    bmr INT DEFAULT 1600,
    target_cal INT DEFAULT 2000,
    fat_target DECIMAL(5,2) DEFAULT -5.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 초기 운동 기록 테이블 생성
CREATE TABLE IF NOT EXISTS exercises (
    id BIGINT PRIMARY KEY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    distance DECIMAL(5,2),
    cal INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 실제 섭취 식단 기록 테이블 생성
CREATE TABLE IF NOT EXISTS meals (
    id BIGINT PRIMARY KEY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    type VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    cal INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
