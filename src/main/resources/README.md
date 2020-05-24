1. Установить PgAdmin4
2. Создать новую бд
3. Запустить скрипт в queryTool PgAdmin4 из папки src\main\resources\DB\Quest_postgres_create.sql
4. Поменять application properties там же 
spring.datasource.url=jdbc:postgresql://localhost:5432/Space_Quest
spring.datasource.username=postgres
spring.datasource.password=Borcuha228
5. Run Maven clean and install
Для разработки 
install plugin lombok for IDEA (используйте гугл)
И может понадобиться включить аннотации в idea (гугл в помощь)