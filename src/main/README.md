# Space Quest BE
## Порядок установки
1. Установить PgAdmin4
2. Создать новую БД
3. Запустить скрипт в queryTool PgAdmin4 из папки 
    *src\main\resources\DB\Quest_postgres_create.sql*
4. Настроить *application.properties*:
    - *spring.datasource.url=jdbc:postgresql://localhost:5432/<Имя БД>*
    - *spring.datasource.username=postgres*
    - *spring.datasource.password=<пароль>*
5. Запустить Maven *clean* и *install*

## Для разработки 
1. Нужно установить плагин *lombok* for IDEA
2. Включить аннотации в IDEA
