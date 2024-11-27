import 'css-doodle' ; 


export default function CssDoodle() {
  return (
    <div className="flex justify-center items-start h-screen w-screen  overflow-hidden">
    <div className="relative w-full h-full max-w-xl max-h-[90vh]"> {/* Container for Doodle */}
            <css-doodle>
            {`
                :doodle {
                    @grid: 45x1 / 100vmin; /* Full responsiveness */
                    position: relative;
                    z-index: 1;
                    width: 100%; /* Full width */
                    height: 100%; /* Full height */
                }

                :container {
                    transform: translate(0, 110px); /* Center the doodle */
                }

                :after, :before {
                    content: '';
                    @place-cell: center;
                    @size: 100%;
                     border-radius: 10px;
                     background: radial-gradient(
                        @p(#160A1F, #B7B1BD, #874DAA) @r(40%),
                        transparent 0
                    ) 

                    @pn(30% 50%, 70% 50%, 50% 60%) / 
                    @r(.1vmin, 5vmin) @lr() 
                    no-repeat;
                    
                    
                }

                @place-cell: center;
                @size: 100%;

                will-change: transform;
                animation: r 4s linear infinite;
                animation-delay: calc(-4s / @size() * @i());

                --translate: translateY(calc(-50% / @size() * @i())); /* Adjust for visibility */
                @keyframes r {
                    from { transform: var(--translate) rotate(0); }
                    to { transform: var(--translate) rotateZ(-1turn); }
                }
            `}
        </css-doodle>
    </div>
</div>
  )
}
