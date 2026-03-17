-- 초기 운동 기록 테이블 생성
CREATE TABLE IF NOT EXISTS exercises (
    id BIGINT PRIMARY KEY,
    date DATE NOT NULL,
    type VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    distance DECIMAL(5,2),
    cal INT NOT NULL
);
