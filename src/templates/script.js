 if(typeof window !== 'undefined' && window.document) {
                    
let scrollpos = window.scrollY
                    const title = document.querySelector(".site-post-title")
                    const menu = document.querySelector(".site-nav-menu")

                    const header_height = title.offsetHeight
                    const add_class_on_scroll = () => title.classList.add("fade-in")
                    const add_other_class_on_scroll = () => menu.classList.add("fade-out")

                    const remove_class_on_scroll = () => title.classList.remove("fade-in")
                    const remove_other_class_on_scroll = () => menu.classList.remove("fade-out")

                    window.addEventListener('scroll', function() { 
                    scrollpos = window.scrollY;
                    if (scrollpos >= header_height) { 
                        add_class_on_scroll() 
                        add_other_class_on_scroll()
                    }
                    else { 
                        remove_class_on_scroll() 
                        remove_other_class_on_scroll() 
                    }
                    })
     
 }
