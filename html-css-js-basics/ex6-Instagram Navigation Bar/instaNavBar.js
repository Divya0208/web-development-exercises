let iconNo=document.querySelectorAll(".icon ");

function changePage(x)
{   

    for(var i = 0; i<10 ; i+=1)
    {
            if(i===x)
            {
                iconNo[i+1].classList.add('active');
                iconNo[i].classList.remove('active');   
            }
            else 
            {
                if(i%2==0)
                {
                    iconNo[i].classList.add('active'); 
                }
                else if (i!=x+1)
                {
                    iconNo[i].classList.remove('active');  
                }
                   
                
            }
    }
    

}