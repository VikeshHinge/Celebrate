let Categories = [
    {
      img:'https://i.pinimg.com/564x/b8/29/bb/b829bba17f5f082e3149b138caf785c3.jpg',
      title:'Hindu Wedding'
    },
    {
        img:'https://i.pinimg.com/564x/82/ed/a4/82eda45da5cbd8f5c2fecbe71332e4e6.jpg',
        title:'Muslim Wedding'
    },
    {
        img:'https://i.pinimg.com/564x/83/bd/78/83bd7865a8d5b089ca2e5d2bfaf1b26d.jpg',
        title:'Sikh Wedding'
      },
    {
          img:'https://i.pinimg.com/564x/c8/1b/e1/c81be159652775174d785a9bd4cba51a.jpg',
          title:'Buddhist Wedding'
    },
    {
        img:'https://i.pinimg.com/564x/2f/76/ce/2f76cec0e659485f02273fe2b69fb15b.jpg',
        title:'Royal Wedding'
      },
      {
          img:'https://i.pinimg.com/564x/a7/af/50/a7af506e56d963b97de2a7379e9bcddd.jpg',
          title:'Bollywood Wedding'
      },
      {
          img:'https://i.pinimg.com/564x/a3/1b/1e/a31b1eeeb9c99a2365a7c71fe2856bac.jpg',
          title:'mehendi and Sangeet'
        },
      {
            img:'https://i.pinimg.com/564x/db/11/09/db1109c45df04522dc5f5a74b51ad8be.jpg',
            title:'Christian Wedding'
      },
      
];

let container = document.getElementById('container')

Categories.forEach((ele,i)=>{
   let card = document.createElement('div')
   card.className='card'
   let img = document.createElement('img')
   img.src=ele.img;
   img.alt=ele.title

   let title = document.createElement('h2')
   title.innerText=ele.title

   card.append(img,title)

   container.append(card)
})


const handelbar = () => {
  let options = document.querySelector('.options')
  options.className='options_visible'
}

const closeoption= () => {
  let options = document.querySelector('.options_visible')
  options.className='options'
}

const logout = () => {
  let user = document.querySelector('.profile>div')
  user.innerText=''
}