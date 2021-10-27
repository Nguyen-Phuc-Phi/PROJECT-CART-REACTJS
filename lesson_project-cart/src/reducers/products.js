
    var initState=[
        {
            id:1,
            name:"Iphone 7 plus",
            image:"https://cdn.tgdd.vn/Products/Images/42/87839/iphone-7-plus-128gb-hh-600x600.jpg",
            description:"Sản phẩm do Appple sản xuất",
            price:1000000,
            inventory:10
        },
        {
            id:2,
            name:"Samsung S21",
            image:"https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-200x200.jpg",
            description:"Sản phẩm do Samsung sản xuất",
            price:1500000,
            inventory:10
        },
        {
            id:3,
            name:"OPPO F1",
            image:"https://techcare.vn/wp-content/uploads/2017/02/thay-mat-kinh-cam-ung-oppo-f1-tai-da-nang.jpg",
            description:"Sản phẩm do Chinas sản xuất",
            price:500000,
            inventory:10
        }
    ]

    const products=(state=initState,action)=>{
        switch (action.type){
            default: return [...state];
        }
    }

    export default products