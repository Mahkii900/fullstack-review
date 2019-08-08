INSERT INTO user_info(username, email)
VALUES ($1, $2)
RETURNING *;