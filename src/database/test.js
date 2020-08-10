const Database2 = require('./db')
const createproffy = require('./createProffy')
Database2.then(async (db)=>{
    //inserir dados
    proffyValue = {
        name: "Diego Fernandes" , 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" , 
        whatsapp: "4002-8922", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
       

    }

    classValue =  {
        subject: "Química", 
        cost:"20" , 
       //o proffy id vira pelo bd
    }

    classScheduleValue = [
        //class id vira pelo bd apos cadastrarmos class
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220
        },
        {
        weekday: 0,
        time_from: 520,
        time_to: 1220
        }
    ]
    //await createproffy(db, {proffyValue, classValue, classScheduleValue})
    //consultar dados insneridos

    const selectedProffys =await db.all("SELECT * FROM proffys ")
    //console.log(selectedProffys)
    //consultar as classes de um determinado professor e trazer junto as classes do professor
    const selectedClassesAndProffys= await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horário que alguem trabalha é das 8 as 18
    // o horpario do time from é 8 precisa ser antes ou igual ao horário solicitado 
    // o time to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "2"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <="1000" 
        AND class_schedule.time_to > "1000"
    `)
    console.log(selectClassesSchedules)
})