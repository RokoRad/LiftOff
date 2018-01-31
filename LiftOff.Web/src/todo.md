- izbrisat fontove
- plava - #3073f2
- crvena - #d41287
- white - #f5f7fa
- black - #34373d
- grey - #4a4e57
- počistit languages
- počistit actione
- background colore


  componentDidUpdate(prevProps) {
    if (this.props.map !== prevProps.map) {
        if (this.polygon) {
          this.polygon.setMap(null);
          this.renderPolygon();
        }
    }
  }

  za polyline popravit

