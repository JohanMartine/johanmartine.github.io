/************************Menu*************************** */

/*Script para que coloque y quite la clase none para mostrar el menu y
escondido */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e)=>{
        
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) =>{
        //si el evento que esta dentro del documento no es un enlace

        if (!e.target.matches(".menu a p")){
            console.log(e.target);
            return false;
        } 
        //pero en el caso de que si sea un enlace que esta dentro del menu
        console.log("fuera del if");
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })
})(document);


/*------------------Contac Form------------ */
// funcion anonima autoejecutable
((d)=>{
    //se les coloca $ ya que es buena practica colocarselo ya que indica que es un elemento del dom
    const $form = d.querySelector(".contact-form"),
        $loader=d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

        $form.addEventListener("submit",(e)=>{
            e.preventDefault();   //para evitr que el formulario se envie
            $loader.classList.remove("none");
            fetch("https://formsubmit.co/ajax/mjohan1997@gmail.com",{
                //https://formsubmit.co/el/dutuma
                
                method:"POST",
                body:new FormData(e.target)
            }).then((res)=>(res.ok ? res.json() : Promise.reject(res)))
            .then(json => {
                console.log(json);
                location.hash = "#gracias";
                $form.reset();
            })
            .catch(err=>{
                console.log(err);
                let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
                $response.querySelector("h3").innerHTML = 'Error ${err.status}:${message} '; 
            }).finally(()=>{
                $loader.classList.add("none");
                setTimeout(() => {
                    location.hash = "close";
                }, 3000);
            });
        });



})(document);

/*pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" */