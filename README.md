# Создайте одностраничное приложение “Список компаний”, используя библиотеку React.js.

Требования: react, redux(redux-toolkit) остальное на ваше усмотрение, НО стоит использовать
минимальное кол-во библиотек(например, таблицу нужно точно сделать самостоятельно, без
сторонних библиотек)

<h3>Дано:</h3>  
<p>Слева имеется таблица со списком компаний. Справа - таблица сотрудников выбранной
компании. Данные в таблицах должны храниться в сторе.</p>

Данные для таблиц &quot;компании&quot; и &quot;сотрудники&quot; - фейковые, создать самостоятельно.
Шапка таблицы &quot;компании&quot;: Чекбокс “Выделить всё”
Тело таблицы имеет столбцы: | Чекбокс | Название компании | Кол-во сотрудников | Адрес

При клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение.
При клике по чекбоксу “Выделить всё” - выделяются все строки.
При выделении одной компании - справа, в таблице &quot;сотрудники&quot;, видим данные сотрудников
этой компании.
Шапка таблицы &quot;сотрудники&quot;: Чекбокс “Выделить всё”
Тело таблицы имеет столбцы: | Чекбокс | Фамилия | Имя | Должность
В таблице &quot;сотрудники&quot; при клике по чекбоксу в строке, соответствующая строка выделяется
цветом на ваше усмотрение.
Если не выделена ни одна из компаний, то таблица &quot;сотрудники&quot; не видна.
Все поля таблиц редактируемые кроме счётчика сотрудников в таблице &quot;компании&quot;.
В обеих таблицах реализовать механизм добавления/удаления компаний/сотрудников по
соответствующим кнопкам. Удаление может быть множественное(если выделены несколько
строк).
При добавлении/удалении сотрудников у компании, счётчик сотрудников в таблице &quot;компании&quot;
обновляется.

Будет плюсом: предусмотреть вариант когда компаний/сотрудников может быть 10
000+(желательно предложить вариант без переключения по страницам, динамическая загрузка
при скролле)
