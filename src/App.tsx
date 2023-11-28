function App() {
  return (
    <>
      <div className='bento-grid grid-cols-3'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div className='tile text-3xl' key={n}>
            Tile {n}
          </div>
        ))}
      </div>

      <div className='bento-grid grid-cols-3 grid-rows-3'>
        <div className='tile'>Cell 1</div>
        <div className='tile'>Cell 2</div>
        <div className='tile row-span-2'>Cell 3</div>
        <div className='tile col-span-2'>Cell 4</div>
        <div className='bento-row'>
          {[
            'Bento Row',
            'It spans all columns',
            'Doesnt align to grid',
            'Just flexbox basically',
          ].map((n) => (
            <div className='tile'>{n}</div>
          ))}
        </div>
      </div>

      <div className='bento-grid grid-cols-3 grid-rows-2'>
        <div className='bento-col'>
          <div className='tile grow-[2]'>Bento Column</div>
          <div className='tile grow-[4]'>It spans all rows</div>
          <div className='tile grow-1'>Just like Bento Row</div>
        </div>
        <div className='tile'>Tile 1</div>
        <div className='tile'>Tile 2</div>
        <div className='tile'>Tile 3</div>
        <div className='tile'>Tile 4</div>
      </div>

      <div className='bento-grid grid-cols-7 grid-rows-1'>
        <div className='bento-col col-span-2'>
          <div className='bento-row'>
            <div className='tile'>Emergency SOS</div>
            <div className='tile'>Crash Detection</div>
          </div>
          <div className='bento-row'>
            <div className='tile'>Emergency SOS</div>
            <div className='tile'>Crash Detection</div>
          </div>
          <div className='tile'>PROMOTION</div>
          <div className='bento-row'>
            <div className='tile'>All day Battery Life</div>
            <div className='tile text-xs'>MagSafe</div>
          </div>
          <div className='tile'>ACTION MODE</div>
        </div>
        <div className='bento-col col-span-3'>
          <div className='tile'>Introducing Dynamic Island</div>
          <div className='grow-[4] tile'>Complicated Example</div>
          <div className='bento-row'>
            <div className='tile'>Emergency SOS</div>
            <div className='tile'>Crash Detection</div>
          </div>
        </div>
        <div className='bento-col col-span-2'>
          <div className='tile'>Always On Display</div>
          <div className='bento-row'>
            <div className='tile'>1600 Nits</div>
            <div className='tile'>2000 Nits</div>
          </div>
          <div className='bento-row grow-[2]'>
            <div className='tile'>New Front camera</div>
            <div className='tile'>Four New colors</div>
          </div>
          <div className='tile'>Ultra Wide</div>
          <div className='bento-row'>
            <div className='tile'>Adaptive True Tone Flash</div>
            <div className='tile'>Cinematic 4k24</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
