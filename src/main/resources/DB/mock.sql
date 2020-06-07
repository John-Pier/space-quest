insert into section(uuid, name, url, text) 
	values ('1fc07691324945d4b5dcefa28bb135cf','testSection1', 'test1.jpg', 'Основной набор задач о ненависти к SpringSecurity');
insert into section(uuid, name, text) 
	values ('83b09c65ba73435491dd3326a9eea717','testSection2', 'Дополнительный раздел для настоящих следопытов');

insert into tooltip(uuid, level, text) 
values ('22fea63f7d0e463699f91aefd83ddaeb',1, 'ха'), ('5376eb74fc6544eab76526a9502eed86',2, 'ха-ха'), ('e1ba78946204421c943109c4d577dfbc', 3, 'ха-ха-ха');
insert into tooltip(uuid, level, text)
values ('bae0632d43ec4af09e6c2e319f8a341b',1, 'уф'), ('cfd63a9d6b374e75a2fff883a57b65d1',2, 'уф-уф'),
		   ('c39bc641494f4ee5a93bcefca4d7d449',1, 'ух');

insert into task(uuid, answer, section_uuid, url, text, title, subtitle)
values ('c79a30507e634558b063432627c56082','test1', '83b09c65ba73435491dd3326a9eea717', 'test2.jpg', 'Вопрос: test + 1 = ?', 'title 4', 'subtitle 4'),
		   ('3c37a106f849482499a3cba93fcbe206','test2', '83b09c65ba73435491dd3326a9eea717', 'dQw4w9WgXcQ', 'Вопрос: test + 2 = ?', 'title 5', 'subtitle 6');
insert into task(uuid, answer, section_uuid, text, title, subtitle)
		values ('1df6e6f2b6a446d0bdaf7c4ef817f8bf','test3', '83b09c65ba73435491dd3326a9eea717', 'Вопрос: test + 3 = ?', 'title 6', 'subtitle 6');

insert into task(uuid, answer, section_uuid, url, text, title, subtitle)
values ('7c87df1efb7646b789383465ea5e4eea','test1', '1fc07691324945d4b5dcefa28bb135cf', 'test1.jpg', 'Вопрос: test + 1 = ?', 'title 1', 'subtitle 1'),
			 ('3b96f5a4f0224aeaad8032de87f5c2a6','test2', '1fc07691324945d4b5dcefa28bb135cf', 'dQw4w9WgXcQ', 'Вопрос: test + 2 = ?', 'title 2', 'subtitle 2');
insert into task(uuid, answer, section_uuid, text, title, subtitle)
values ('1caed59bdab24732-9fe3f9f52dcbc730','test3', '1fc07691324945d4b5dcefa28bb135cf', 'Вопрос: test + 3 = ?', 'title 3', 'subtitle 3');

insert into task_tooltip(task_uuid, tooltip_uuid)
values('7c87df1efb7646b789383465ea5e4eea','22fea63f7d0e463699f91aefd83ddaeb'),
      ('7c87df1efb7646b789383465ea5e4eea','5376eb74fc6544eab76526a9502eed86'),
	    ('7c87df1efb7646b789383465ea5e4eea','e1ba78946204421c943109c4d577dfbc'),
      ('3b96f5a4f0224aeaad8032de87f5c2a6','bae0632d43ec4af09e6c2e319f8a341b'),
	    ('3b96f5a4f0224aeaad8032de87f5c2a6','cfd63a9d6b374e75a2fff883a57b65d1'),
	    ('1caed59bdab24732-9fe3f9f52dcbc730','c39bc641494f4ee5a93bcefca4d7d449'),
	    ('c79a30507e634558b063432627c56082','c39bc641494f4ee5a93bcefca4d7d449');