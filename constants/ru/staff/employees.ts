export const EMPLOYEES: {
	id: string
	name: string
	city: string
	image_bg?: string
	image?: string
	type: string
	category: string
	experience: number
	training: string[]
	education: string[]
	services: string[]
	certificates?: string[]
}[] = [
	{
		id: 'kireev_vlad',
		name: 'Владислав Киреев',
		city: 'рогачев',
		type: 'ортопед',
		category: 'первая',
		experience: 12,
		image: '/doctors/kireev_vlad/kireev_vlad.png',
		training: [
			'Металлокерамические зубные протезы 2010 г.',
			'Подготовка стоматологического больного 2012 г.',
			'Основы дентальной имплантации 2014',
			'Комплексное лечение заболеваний тканей периодонта 2015 г',
			'междисциплинарный подход в диагностике и лечении заболеваний пародонта и слизистой оболочке полости рта. 2019',
		],
		education: [
			'Стажировка в Германии в частной практике Prof. Dr. Mark Soibelmann',
			'Сертификат об участии в мастер-классе AlphaBio «Theoretical and practical aspects of implantology and oral rehabilitation on dental implants using the Alpha-Bio System»',
			'Сертификат о прохождении авторского курса Dr. Mark Soibelmann «Sowie Laseranwendungen in der implantolodie»',
			'Сертификат об участии в практическом курсе Gadji Dajaev «Препарирование зубов для изготовления полных коронок»',
			'Сертификат о прохождении авторского курса проф.Заблоцкого Я.В. «Протезирование на имплантатах»',
			'Сертификат об участии в мастер-классе MIS «Основы дентальной имплантации»',
			'Сертификат об участии в мастер-классе AlphaBio «Современные аспекты дентальной имплантации»',
			'Сертификат о прохождении практического курса Д.Компаниец «Золотое сечение безметалловых реставраций. Гнатология тотальных работ»',
			'Сертификат об участии в семинаре А.Красножена «Протезирование на имплантах.',
			'Участие в семинаре MEGAGEN «Искусство создания натуральной улыбки при протезировании.»',
			'Участие в семинаре MEGAGEN «реабилитация в сложных клинических случаях без костной пластики с немедленной нагрузкой.»',
			'Прохождение авторского курса Б.Фридзона «Новые формулы протезирования на имплантах.»',
		],
		services: [
			'съемное протезирование (бюгельные протезы, нейлоновые протезы, гиппоалергенные akril-free протезы)',
			'металокерамика',
			'безметалловая керамика',
			'протезирование на имплантах',
			'съемное протезирование на имплантах',
			'протезирование на благородных металлах',
			'микропротезирование',
			'виниры и вкладки',
		],
		certificates: [
			'/doctors/kireev_vlad/kireev_vlad1.jpg',
			'/doctors/kireev_vlad/kireev_vlad2.jpg',
			'/doctors/kireev_vlad/kireev_vlad3.jpg',
			'/doctors/kireev_vlad/kireev_vlad4.jpg',
			'/doctors/kireev_vlad/kireev_vlad5.jpg',
			'/doctors/kireev_vlad/kireev_vlad6.jpg',
		],
	},
	{
		id: 'mahaniko_pavel',
		name: 'Павел Махонько',
		city: 'минск',
		type: 'ортопед-хирург',
		category: 'первая',
		experience: 12,
		image: '/doctors/mahaniko_pavel/mahaniko_pavel.png',
		training: [
			'Съемные и несъемные конструкции зубных протезов с опорой на дентальные имплантаты. 2009г.',
			'Современные принципы лечения воспалительных заболеваний и травм челюстно-лицевой области. 2014г.',
			'Первичная специализация по хирургии и имплантологии. 2014г.',
		],
		education: [
			'Сертификат о прохождении практического курса Д.Компаниец «Золотое сечение безметалловых реставраций. Гнатология тотальных работ»',
			'Сертификат об участии в мастер-классе AlphaBio «Критерии успеха несъемного и съемного протезирования на имплантатах на примере системы AlphaBio»',
			'Сертификат об участии в мастер-классе MIS «Основы дентальной имплантации»',
			'Сертификат об участии в мастер-классе AlphaBio «Theoretical and practical aspects of implantology and oral rehabilitation on dental implants using the Alpha-Bio System»',
			'Сертификат об участии в мастер-классе AlphaBio «Современные аспекты дентальной имплантации»',
			'Сертификат о прохождении авторского курса др. Красножен А. «Протезирование на имплантах»',
			'Сертификат об участии в практическом курсе Gadji Dajaev «Препарирование зубов для изготовления полных коронок»',
			'Сертификат об участии в семинаре А.Красножена «Протезирование на имплантах.»',
			'Участие в семинаре «Синус-лифт полная версия.»',
			'участие в обучающем семинаре «Немедленная нагрузка на классических имплантатах. Протокол восстановления зубного ряда  «все на 4 » и «все на 6″ картикальные и скуловые имплантаты»',
			' Участие в курсе «Хирургический протокол одномоментной и отсроченной имплантации с немедленной нагрузкой» .',
		],
		services: [
			'имплантация',
			'хирургическая подготовка к имплантации',
			'костная пластика',
			'хирургическая подготовка к съемному протезированию',
			'сложное удаление зубов',
			'съемное протезирование (бюгельные протезы, нейлоновые протезы, гиппоалергенные akril-free протезы)',
			'металлокерамика',
			'безметалловая керамика',
			'протезирование на имплантах',
			'съемное протезирование на имплантах',
			'протезирование на благородных металлах',
			'микропротезирование',
		],
		certificates: [
			'/doctors/mahaniko_pavel/mahaniko_pavel1.jpg',
			'/doctors/mahaniko_pavel/mahaniko_pavel2.jpg',
			'/doctors/mahaniko_pavel/mahaniko_pavel3.jpg',
			'/doctors/mahaniko_pavel/mahaniko_pavel4.jpg',
		],
	},
	{
		id: 'bichkov_ivan',
		name: 'Иван Бычков',
		city: '',
		type: 'терапевт',
		category: 'первая',
		experience: 11,
		image: '/doctors/bichkov_ivan/bichkov_ivan.png',
		training: [
			'стажировка на рабочем месте » Терапевтическая стоматология» 2019',
			'Лечение и профилактика терапевтических заболеваний зубов и полости рта. 2020г.',
			'Минимальные инвазивные методы лечения кариеса. 2020г.',
		],
		education: [
			'Сертификат об участии в мастер-классе Belodent.org «Whitening and Splinting»',
			'Сертификат об участии в мастер-классе Giuseppe Cantatore «New trends in endodontic shaping»',
			'Сертификат об участии в мастер-классе Ширли Бренэм «Мануальная техника ультразвуковой очистки зубов»',
			'Сертификат об участии в мастер-классе Dentsply «Современные технологии реставрации зубов. Эстетика и функциональность.»',
			'Сертификат об участии в мастер-классе Ширли Бренэм «Мануальная техника ультразвуковой очистки зубов',
			'Сертификат о прохождении авторского курса Dr. Marco Martignoni “Minimum instruments. Uncompromising result”',
			'Обучение на семинаре Дениса Крутикова «прямая композитная реставрация передних зубов.»',
			'Обучение в семинаре « Современные методы устранения дисколоритов зубов. »',
		],
		services: [
			'Профессиональная чистка',
			'Гигиенические процедуры',
			'Герметизация фиссур',
			'Лечение некариозных поражений',
			'Лечение кариеса и эстетическая реставрация',
			'Шинирование подвижных зубов',
			'Лечение передонтита',
		],
		certificates: ['/doctors/bichkov_ivan/bichkov_ivan1.jpg'],
	},
	{
		id: 'saicovskaya_tanya',
		name: 'Татьяная Сайковская',
		city: '',
		type: 'терапевт',
		category: 'первая',
		experience: 12,
		image: '/doctors/saicovskaya_tanya/saicovskaya_tanya.png',
		training: [
			'Минимальные инвазивные методы лечения кариеса. 2015г.',
			'Патология твердых тканей зуба, диагностика, профилактика, лечение. 2012г',
			'Эстетическая стоматология. 2008г.',
			'Методы коррекции цвета зуба. 2008г.',
			'Клиническая ординатура «Стоматология терапевтическая». 2008-2011г.',
			'Профилактика и лечение кариозной болезни на приеме врача-стоматолога. 2007 г.',
		],
		education: [
			'Сертификат о прохождении авторского курса Сергея Радлинского г Полтава Украина',
			'Сертификат об участии в мастер-классе Dentsply «Современные технологии реставрации зубов. Эстетика и функциональность.»',
			'Сертификат об участии в мастер-классе Dentsply « построение художественной реставрации материалом Esthet-X HD»',
			'Сертификат о прохождении авторского курсаWilheim J. PERTOT « The endodontic success: how to access, shape, clean and pack»',
			'Сертификат об участии в мастер-классе Dentsply «Контактные пункты в боковых зубах. Системы матриц, способы реставрации, тактика при глубоких разрушениях»',
			'Сертификат об участии в мастер-классе Ширли Бренэм «Мануальная техника ультразвуковой очистки зубов»',
			'Сертификат о прохождении авторского курса Sergio Kuttler «Simplicity in endodontics: an achievable goal. Retreatment. “Why sould I give this tooth another chance”»',
			'Сертификат об участии в мастер-классе Dentsply «Ультразвук.Все ли мы о нем знаем? Наука и искусство в профилактике и лечении заболеваний периодонта»',
			'Сертификат об участии в мастер-классе «Как сделать процесс создания реставраций боковой группы зубов менее трудоемким.»',
			'Сертификат об участии в мастер-классе Dentsply «Endodontic practice: solution for everyday success»',
			'Сертификат об участии в мастер-классе «Построение художественной реставрации фонтальной группы зубов»',
			'Сертификат о прохождении авторского курса Сергея Радлинского «обучение реставрационной терапии с применением оборудования, материалов и технологий компании Дентсплай»г Полтава Украина',
			'Сертификат об участии в мастер-классе Giuseppe Cantatore «New trends in endodontic shaping»',
			'Сертификат об участии в лекции «Модульные технологии в эстетическом моделировании зубов»',
			'Сертификат о прохождении авторского курса Dr. Marco Martignoni “Minimum instruments. Uncompromising result”',
			'Сертификат о прохождении авторского курса Dr. Marco Martignoni “Paradigm of successful endodontics.”',
		],
		services: [
			'Профессиональная чистка',
			'Гигиенические процедуры',
			'Герметизация фиссур',
			'Лечение некариозных поражений',
			'Лечение кариеса и эстетическая реставрация',
			'Шинирование подвижных зубов',
			'Лечение передонтита',
		],
		certificates: [
			'/doctors/saicovskaya_tanya/saicovskaya_tanya1.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya2.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya3.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya4.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya5.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya6.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya7.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya8.jpg',
			'/doctors/saicovskaya_tanya/saicovskaya_tanya9.jpg',
		],
	},
	{
		id: 'korzan_yadviga',
		name: 'Ядвига Корзан',
		city: '',
		type: 'ортодонт',
		category: 'первая',
		experience: 9,
		image: '/doctors/korzan_yadviga/korzan_yadviga.png',
		training: [
			'Комплексная реабилитация больных с зубочелюстными аномалиями. 2011г',
			'Контроль окклюзии на этапах ортодонтической и ортопедической коррекции прикуса. 2016г',
			'Основы эстетической стоматологии. 2018г',
		],
		education: [
			'Сертификат об участии в мастер-классе » Аппарат «прямой дуги», его конструктивные элементы, особенности их использования при ортодонтическом лечении»',
			'Сертификат об участии в международной научно-практической конференции » Современная ортодонтия: достижения и перспективы развития»',
			'Сертификат об участии в семинаре » Интегральность самолигирующей системы Т1 на практике».',
			'Сертификат об участии в семинаре » Применение LM-активаторов при раннем ортодонтическом лечении»',
			'Сертификат об участии в научно-практической конференции «Междисциплинарный  подход в диагностике, профилактике и лечении заболеваний челюстно-лицевой области.»',
			'Сертификат об участии в семинаре «Этапы лечения системой DAMON: от первой дуги до завершения.»',
			'Сертификат об участии в семинаре «Современное миофункциональное лечение.»',
			'Сертификат об участии в семинаре » Ошибки и осложнения при ортодонтическом лечении несъемной техникой.»',
			'Сертификат об участии в семинаре » Брекет-система DAMON- первые шаги к успешному лечению, диагностика, планирование, выбор прописи, позиционирование.»',
			'Сертификат об участии в семинаре «Детализация  эстетических параметров для успешного ортодонтического лечения. »',
			'Сертификат об участии в семинаре «Современное миофункциональное лечение.»',
		],
		services: [
			'Установка классических металлических  ( лигатурных) брекетов',
			'Установка эстетических (керамических) металлических брекетов (лигатурных)',
			'Установка металлических самолигирующих брекет-систем Damon',
			'Установка эстетических (керамических) самолигирующих брекет-систем Danom',
			'Установка элайнеров (невидимых брекетов)',
		],
	},
	{
		id: 'kovalchuk_igor',
		name: 'Ковальчук Игорь',
		city: '',
		type: 'ортопед',
		category: 'первая',
		experience: 7,
		image: '/doctors/kovalchuk_igor/kovalchuk_igor.png',
		training: [
			'Металлокерамические зубные протезы 2010 г.',
			'Современные технологии изготовления безметалловых  конструкций несъемных зубных протезов.',
			'Нормализация окклюзии при заболеваниях височно-нижнечелюстного сустава и жевательных мышц.',
		],
		education: [
			'Сертификат об участии в практическом курсе Gadji Dajaev «Препарирование зубов для изготовления полных коронок»',
			'Сертификат о прохождении авторского курса др. Красножен А. «Протезирование на имплантах»',
			'Сертификат об участии в мастер-классе MIS «Основы дентальной имплантации»',
			'Участие в семинаре MEGAGEN «Искусство создания натуральной улыбки при протезировании.»',
		],
		services: [
			'Установка классических металлических  ( лигатурных) брекетов',
			'Установка эстетических (керамических) металлических брекетов (лигатурных)',
			'Установка металлических самолигирующих брекет-систем Damon',
			'Установка эстетических (керамических) самолигирующих брекет-систем Danom',
			'Установка элайнеров (невидимых брекетов)',
		],
	},
	{
		id: 'belousova_tanya',
		name: 'Белоусова Татьяна',
		city: '',
		type: '',
		category: '',
		experience: 0,
		image: '/doctors/belousova_tanya/belousova_tanya.png',
		training: [''],
		education: [''],
		services: [''],
		certificates: [
			'/doctors/belousova_tanya/belousova_tanya1.jpg',
			'/doctors/belousova_tanya/belousova_tanya2.jpg',
			'/doctors/belousova_tanya/belousova_tanya3.jpg',
			'/doctors/belousova_tanya/belousova_tanya4.jpg',
			'/doctors/belousova_tanya/belousova_tanya5.jpg',
			'/doctors/belousova_tanya/belousova_tanya6.jpg',
			'/doctors/belousova_tanya/belousova_tanya7.jpg',
			'/doctors/belousova_tanya/belousova_tanya8.jpg',
			'/doctors/belousova_tanya/belousova_tanya9.jpg',
			'/doctors/belousova_tanya/belousova_tanya10.jpg',
			'/doctors/belousova_tanya/belousova_tanya11.jpg',
			'/doctors/belousova_tanya/belousova_tanya12.jpg',
		],
	},
]
