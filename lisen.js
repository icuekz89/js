function waktu() {
  var _0x497631 = new Date()
  setTimeout('waktu()', 1000)
  document.getElementById('jam').innerHTML = _0x497631.getHours()
  document.getElementById('menit').innerHTML = _0x497631.getMinutes()
  document.getElementById('detik').innerHTML = _0x497631.getSeconds()
}
window.setTimeout('waktu()', 1000)
function hari() {
  var _0x27f19f = new Array(
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu'
    ),
    _0x5349eb = new Array(
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ),
    _0x1ab92a = new Date()
  setTimeout('hari()', 0)
  document.getElementById('hasil').innerHTML =
    _0x27f19f[_0x1ab92a.getDay()] +
    ', ' +
    _0x1ab92a.getDate() +
    ' ' +
    _0x5349eb[_0x1ab92a.getMonth()] +
    ' ' +
    _0x1ab92a.getFullYear()
}
window.setTimeout('hari()', 0)
function angkaToRp(_0x346b04) {
  var _0x271eb2 = '',
    _0x54bf69 = _0x346b04.toString().split('').reverse().join('')
  for (var _0x14faf7 = 0; _0x14faf7 < _0x54bf69.length; _0x14faf7++) {
    if (_0x14faf7 % 3 == 0) {
      _0x271eb2 += _0x54bf69.substr(_0x14faf7, 3) + '.'
    }
  }
  return (
    'Rp' +
    _0x271eb2
      .split('', _0x271eb2.length - 1)
      .reverse()
      .join('')
  )
}
function formatBerat(_0x2e2d90) {
  if (_0x2e2d90 <= 0) {
    return '-'
  } else {
    if (_0x2e2d90 < 1000) {
      return _0x2e2d90 + ' gr'
    } else {
      return _0x2e2d90 / 1000 + ' Kg'
    }
  }
}
var cart_kosong =
    '<div class="empty-cart"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"></svg><span class="center">Keranjang Anda masih kosong</span></div>',
  tombolMinus =
    '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19,13H5V11H19V13Z"></path></svg>',
  tombolPlus =
    '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>',
  tombolRemove =
    '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M21.03,3L18,20.31C17.83,21.27 17,22 16,22H8C7,22 6.17,21.27 6,20.31L2.97,3H21.03M5.36,5L8,20H16L18.64,5H5.36M9,18V14H13V18H9M13,13.18L9.82,10L13,6.82L16.18,10L13,13.18Z"></path></svg>'
$('.jumlah-produk input').on('keyup', function () {
  var _0x430208 = parseInt($('.jumlah-produk input').val())
  1 >= _0x430208 && ($('.jumlah-produk input').val(1), totalPrice(1))
  $(this).parents('.jumlah-produk').attr('data-selected', _0x430208)
})
$('.jumlah-produk .min').on('click', function () {
  var _0x320179 = parseInt($('.jumlah-produk input').val()) - 1
  1 >= _0x320179
    ? ($('.jumlah-produk input').val(1),
      $(this).parents('.jumlah-produk').attr('data-selected', 1))
    : ($('.jumlah-produk input').val(_0x320179),
      $(this).parents('.jumlah-produk').attr('data-selected', _0x320179))
})
$('.jumlah-produk .plus').on('click', function () {
  var _0x14ebe7 = parseInt($('.jumlah-produk input').val()) + 1
  $('.jumlah-produk input').val(_0x14ebe7)
  $(this).parents('.jumlah-produk').attr('data-selected', _0x14ebe7)
})
;(function (_0x9eb04a, _0x1dc22e) {
  var _0xb816ca = typeof '',
    _0x141355 = typeof undefined,
    _0x5e4533 = typeof function () {},
    _0x49f308 = typeof {},
    _0x5451ba = function (_0x46e785, _0x133e26) {
      return typeof _0x46e785 === _0x133e26
    },
    _0x5ce42e = function (_0x52765b) {
      return _0x5451ba(_0x52765b, _0xb816ca)
    },
    _0x58b746 = function (_0x49e6e5) {
      return _0x5451ba(_0x49e6e5, _0x141355)
    },
    _0x527f47 = function (_0x4da4d5) {
      return _0x5451ba(_0x4da4d5, _0x5e4533)
    },
    _0xa159e8 = function (_0x405786) {
      return _0x5451ba(_0x405786, _0x49f308)
    },
    _0x2dbb6b = function (_0x1c0952) {
      return typeof HTMLElement === 'object'
        ? _0x1c0952 instanceof HTMLElement
        : typeof _0x1c0952 === 'object' &&
            _0x1c0952.nodeType === 1 &&
            typeof _0x1c0952.nodeName === 'string'
    },
    _0x109a11 = function (_0x51613f) {
      var _0x40c2fe = { jQuery: '*' }
      var _0x33c770 = _0x40c2fe,
        _0x30f85a = 0,
        _0x9af6b8 = 'SCI-',
        _0x299d86 = {},
        _0x5a4a5e = _0x51613f || 'simpleCart',
        _0x5e7ced = {},
        _0x2eb1bd = { on: _0x2eb1bd.bind },
        _0x447ce1 = {},
        _0x55e626 = _0x9eb04a.localStorage,
        _0x4113fd = _0x9eb04a.console || {
          msgs: [],
          log: function (_0x2ac55b) {
            _0x4113fd.msgs.push(_0x2ac55b)
          },
        },
        _0x567a63 = 'value',
        _0x17f49a = 'text',
        _0x30f732 = 'click',
        _0x11828a = {
          IDR: {
            code: 'IDR',
            symbol: 'Rp',
            name: 'Rupiah Indonesia',
          },
        },
        _0x12c2b9 = {
          currency: 'IDR',
          language: 'Indonesia',
          cartStyle: 'div',
          cartColumns: [],
          excludeFromCheckout: ['thumb'],
          shippingFlatRate: 0,
          shippingQuantityRate: 0,
          shippingTotalRate: 0,
          shippingCustom: null,
          taxRate: 0,
          taxShipping: false,
          data: {},
        },
        _0x36bb2d = function (_0x1297a4) {
          var _0x7df94e = (function () {
              var _0x123f08 = true
              return function (_0x3cf9e2, _0x3fd0d6) {
                var _0x51fff7 = _0x123f08
                  ? function () {
                      if (_0x3fd0d6) {
                        var _0x19648b = _0x3fd0d6.apply(_0x3cf9e2, arguments)
                        return (_0x3fd0d6 = null), _0x19648b
                      }
                    }
                  : function () {}
                return (_0x123f08 = false), _0x51fff7
              }
            })(),
            _0x16ec16 = _0x7df94e(this, function () {
              return _0x16ec16
                .toString()
                .search('(((.+)+)+)+$')
                .toString()
                .constructor(_0x16ec16)
                .search('(((.+)+)+)+$')
            })
          _0x16ec16()
          if (_0x527f47(_0x1297a4)) {
            return _0x36bb2d.ready(_0x1297a4)
          }
          if (_0xa159e8(_0x1297a4)) {
            return _0x36bb2d.extend(_0x12c2b9, _0x1297a4)
          }
        },
        _0x155b7a,
        _0x135a04
      _0x36bb2d.extend = function (_0x65a68f, _0x116c14) {
        var _0x43ee6f
        if (_0x58b746(_0x116c14)) {
          _0x116c14 = _0x65a68f
          _0x65a68f = _0x36bb2d
        }
        for (_0x43ee6f in _0x116c14) {
          Object.prototype.hasOwnProperty.call(_0x116c14, _0x43ee6f) &&
            (_0x65a68f[_0x43ee6f] = _0x116c14[_0x43ee6f])
        }
        return _0x65a68f
      }
      _0x36bb2d.extend({
        copy: function (_0x5ccfee) {
          var _0x4fe05d = _0x109a11(_0x5ccfee)
          return _0x4fe05d.init(), _0x4fe05d
        },
      })
      _0x36bb2d.extend({
        isReady: false,
        add: function (_0x1f557a, _0x317e16) {
          var _0x72dda1 = _0x1f557a || {},
            _0x2735c7 = new _0x36bb2d.Item(_0x72dda1),
            _0xa5b69c = true,
            _0x13289e = _0x317e16 === true ? _0x317e16 : false,
            _0xd7e6d3
          if (!_0x13289e) {
            _0xa5b69c = _0x36bb2d.trigger('beforeAdd', [_0x2735c7])
            if (_0xa5b69c === false) {
              return false
            }
          }
          _0xd7e6d3 = _0x36bb2d.has(_0x2735c7)
          _0xd7e6d3
            ? (_0xd7e6d3.increment(_0x2735c7.quantity()),
              (_0x2735c7 = _0xd7e6d3))
            : (_0x299d86[_0x2735c7.id()] = _0x2735c7)
          _0x36bb2d.update()
          !_0x13289e &&
            _0x36bb2d.trigger('afterAdd', [_0x2735c7, _0x58b746(_0xd7e6d3)])
          return _0x2735c7
        },
        each: function (_0x2c56ee, _0x468c99) {
          var _0x99ad51,
            _0x1b92d6 = 0,
            _0x5b9ee0,
            _0x5b7d43,
            _0x2bb466
          if (_0x527f47(_0x2c56ee)) {
            ;(_0x5b7d43 = _0x2c56ee), (_0x2bb466 = _0x299d86)
          } else {
            if (_0x527f47(_0x468c99)) {
              ;(_0x5b7d43 = _0x468c99), (_0x2bb466 = _0x2c56ee)
            } else {
              return
            }
          }
          for (_0x99ad51 in _0x2bb466) {
            if (Object.prototype.hasOwnProperty.call(_0x2bb466, _0x99ad51)) {
              _0x5b9ee0 = _0x5b7d43.call(
                _0x36bb2d,
                _0x2bb466[_0x99ad51],
                _0x1b92d6,
                _0x99ad51
              )
              if (_0x5b9ee0 === false) {
                return
              }
              _0x1b92d6 += 1
            }
          }
        },
        find: function (_0x31ad67) {
          var _0x5788af = []
          if (_0xa159e8(_0x299d86[_0x31ad67])) {
            return _0x299d86[_0x31ad67]
          }
          if (_0xa159e8(_0x31ad67)) {
            return (
              _0x36bb2d.each(function (_0x2e0b47) {
                var _0x242eac = true
                _0x36bb2d.each(
                  _0x31ad67,
                  function (_0x2943df, _0x31544e, _0x1dcd65) {
                    if (_0x5ce42e(_0x2943df)) {
                      if (_0x2943df.match(/<=.*/)) {
                        _0x2943df = parseFloat(_0x2943df.replace('<=', ''))
                        !(
                          _0x2e0b47.get(_0x1dcd65) &&
                          parseFloat(_0x2e0b47.get(_0x1dcd65)) <= _0x2943df
                        ) && (_0x242eac = false)
                      } else {
                        if (_0x2943df.match(/</)) {
                          _0x2943df = parseFloat(_0x2943df.replace('<', ''))
                          !(
                            _0x2e0b47.get(_0x1dcd65) &&
                            parseFloat(_0x2e0b47.get(_0x1dcd65)) < _0x2943df
                          ) && (_0x242eac = false)
                        } else {
                          if (_0x2943df.match(/>=/)) {
                            _0x2943df = parseFloat(_0x2943df.replace('>=', ''))
                            !(
                              _0x2e0b47.get(_0x1dcd65) &&
                              parseFloat(_0x2e0b47.get(_0x1dcd65)) >= _0x2943df
                            ) && (_0x242eac = false)
                          } else {
                            if (_0x2943df.match(/>/)) {
                              ;(_0x2943df = parseFloat(
                                _0x2943df.replace('>', '')
                              )),
                                !(
                                  _0x2e0b47.get(_0x1dcd65) &&
                                  parseFloat(_0x2e0b47.get(_0x1dcd65)) >
                                    _0x2943df
                                ) && (_0x242eac = false)
                            } else {
                              !(
                                _0x2e0b47.get(_0x1dcd65) &&
                                _0x2e0b47.get(_0x1dcd65) === _0x2943df
                              ) && (_0x242eac = false)
                            }
                          }
                        }
                      }
                    } else {
                      !(
                        _0x2e0b47.get(_0x1dcd65) &&
                        _0x2e0b47.get(_0x1dcd65) === _0x2943df
                      ) && (_0x242eac = false)
                    }
                    return _0x242eac
                  }
                )
                _0x242eac && _0x5788af.push(_0x2e0b47)
              }),
              _0x5788af
            )
          }
          if (_0x58b746(_0x31ad67)) {
            return (
              _0x36bb2d.each(function (_0x33f5c5) {
                _0x5788af.push(_0x33f5c5)
              }),
              _0x5788af
            )
          }
          return _0x5788af
        },
        items: function () {
          return this.find()
        },
        has: function (_0x23b978) {
          var _0x430c2e = false
          return (
            _0x36bb2d.each(function (_0xd43b9a) {
              if (_0xd43b9a.equals(_0x23b978)) {
                _0x430c2e = _0xd43b9a
              }
            }),
            _0x430c2e
          )
        },
        empty: function () {
          var _0x18defd = {}
          _0x36bb2d.each(function (_0x4cc553) {
            _0x4cc553.remove(true) === false &&
              (_0x18defd[_0x4cc553.id()] = _0x4cc553)
          })
          _0x299d86 = _0x18defd
          _0x36bb2d.update()
        },
        quantity: function () {
          var _0xd9f3e3 = 0
          return (
            _0x36bb2d.each(function (_0xb94c0d) {
              _0xd9f3e3 += _0xb94c0d.quantity()
            }),
            _0xd9f3e3
          )
        },
        totalberat: function () {
          var _0x93d630 = 0
          return (
            _0x36bb2d.each(function (_0x586ec0) {
              _0x93d630 += _0x586ec0.totalberat()
            }),
            _0x93d630
          )
        },
        total: function () {
          var _0x56814f = 0
          return (
            _0x36bb2d.each(function (_0x17745b) {
              _0x56814f += _0x17745b.total()
            }),
            _0x56814f
          )
        },
        grandTotal: function () {
          return _0x36bb2d.total() + _0x36bb2d.tax() + _0x36bb2d.shipping()
        },
        update: function () {
          _0x36bb2d.save()
          _0x36bb2d.trigger('update')
        },
        init: function () {
          _0x36bb2d.load(), _0x36bb2d.update(), _0x36bb2d.ready()
        },
        $: function (_0x25ade9) {
          return new _0x36bb2d.ELEMENT(_0x25ade9)
        },
        $create: function (_0x3e5e14) {
          return _0x36bb2d['$'](_0x1dc22e.createElement(_0x3e5e14))
        },
        setupViewTool: function () {
          var _0x35963e,
            _0x412c6b,
            _0x5977c1 = _0x9eb04a,
            _0x8927b0
          for (_0x8927b0 in _0x33c770) {
            if (
              Object.prototype.hasOwnProperty.call(_0x33c770, _0x8927b0) &&
              _0x9eb04a[_0x8927b0]
            ) {
              _0x35963e = _0x33c770[_0x8927b0]
                .replace('*', _0x8927b0)
                .split('.')
              _0x412c6b = _0x35963e.shift()
              _0x412c6b && (_0x5977c1 = _0x5977c1[_0x412c6b])
              if (typeof _0x5977c1 === 'function') {
                _0x155b7a = _0x5977c1
                _0x36bb2d.extend(_0x36bb2d.ELEMENT['_'], _0x5e7ced[_0x8927b0])
                return
              }
            }
          }
        },
        ids: function () {
          var _0xcd28b9 = []
          return (
            _0x36bb2d.each(function (_0x525410) {
              _0xcd28b9.push(_0x525410.id())
            }),
            _0xcd28b9
          )
        },
        save: function () {
          _0x36bb2d.trigger('beforeSave')
          var _0x4d9372 = {}
          _0x36bb2d.each(function (_0x20853a) {
            _0x4d9372[_0x20853a.id()] = _0x36bb2d.extend(
              _0x20853a.fields(),
              _0x20853a.options()
            )
          })
          _0x55e626.setItem(_0x5a4a5e + '_items', JSON.stringify(_0x4d9372))
          _0x36bb2d.trigger('afterSave')
        },
        load: function () {
          _0x299d86 = {}
          var _0x4b3599 = _0x55e626.getItem(_0x5a4a5e + '_items')
          if (!_0x4b3599) {
            return
          }
          try {
            _0x36bb2d.each(JSON.parse(_0x4b3599), function (_0x3ed89c) {
              _0x36bb2d.add(_0x3ed89c, true)
            })
          } catch (_0x30d289) {
            _0x36bb2d.error('Error Loading data: ' + _0x30d289)
          }
          _0x36bb2d.trigger('load')
        },
        ready: function (_0x8b8b9f) {
          if (_0x527f47(_0x8b8b9f)) {
            if (_0x36bb2d.isReady) {
              _0x8b8b9f.call(_0x36bb2d)
            } else {
              _0x36bb2d.bind('ready', _0x8b8b9f)
            }
          } else {
            _0x58b746(_0x8b8b9f) &&
              !_0x36bb2d.isReady &&
              (_0x36bb2d.trigger('ready'), (_0x36bb2d.isReady = true))
          }
        },
        error: function (_0x11a008) {
          var _0x52e253 = ''
          if (_0x5ce42e(_0x11a008)) {
            _0x52e253 = _0x11a008
          } else {
            _0xa159e8(_0x11a008) &&
              _0x5ce42e(_0x11a008.message) &&
              (_0x52e253 = _0x11a008.message)
          }
          try {
            _0x4113fd.log('simpleCart(js) Error: ' + _0x52e253)
          } catch (_0xada67a) {}
          _0x36bb2d.trigger('error', [_0x11a008])
        },
      })
      _0x36bb2d.extend({
        tax: function () {
          var _0x58ffec = _0x12c2b9.taxShipping
              ? _0x36bb2d.total() + _0x36bb2d.shipping()
              : _0x36bb2d.total(),
            _0x2740e9 = _0x36bb2d.taxRate() * _0x58ffec
          return (
            _0x36bb2d.each(function (_0xbef5da) {
              if (_0xbef5da.get('tax')) {
                _0x2740e9 += _0xbef5da.get('tax')
              } else {
                _0xbef5da.get('taxRate') &&
                  (_0x2740e9 += _0xbef5da.get('taxRate') * _0xbef5da.total())
              }
            }),
            parseFloat(_0x2740e9)
          )
        },
        taxRate: function () {
          return _0x12c2b9.taxRate || 0
        },
        shipping: function (_0x31fbd7) {
          if (_0x527f47(_0x31fbd7)) {
            var _0x11a47f = { shippingCustom: _0x31fbd7 }
            _0x36bb2d(_0x11a47f)
            return
          }
          var _0x5ed64c =
            _0x12c2b9.shippingQuantityRate * _0x36bb2d.quantity() +
            _0x12c2b9.shippingTotalRate * _0x36bb2d.total() +
            _0x12c2b9.shippingFlatRate
          return (
            _0x527f47(_0x12c2b9.shippingCustom) &&
              (_0x5ed64c += _0x12c2b9.shippingCustom.call(_0x36bb2d)),
            _0x36bb2d.each(function (_0x3dd5d8) {
              _0x5ed64c += parseFloat(_0x3dd5d8.get('shipping') || 0)
            }),
            parseFloat(_0x5ed64c)
          )
        },
      })
      _0x135a04 = {
        attr: function (_0xa36b0d, _0x2edd4f) {
          return _0xa36b0d.get(_0x2edd4f.attr) || ''
        },
        harga: function (_0xa977fc, _0x5b75b6) {
          return [_0x36bb2d.toCurrency(_0xa977fc.get(_0x5b75b6.attr) || 0)]
        },
        currency: function (_0xf18076, _0x388c37) {
          return [
            "<span class='sub-total'>Sub Total </span> " +
              _0x36bb2d.toCurrency(_0xf18076.get(_0x388c37.attr) || 0),
          ]
        },
        jumlah: function (_0x48a8b7, _0x3b81a) {
          return [_0x48a8b7.get(_0x3b81a.attr)]
        },
        ukuran: function (_0x360a84, _0x2f059d) {
          return [_0x360a84.get(_0x2f059d.attr)]
        },
        link: function (_0x409726, _0x84f4a8) {
          return [_0x409726.get(_0x84f4a8.attr)]
        },
        linkproduk: function (_0x5eeef3, _0x379a8b) {
          return [_0x5eeef3.get(_0x379a8b.attr)]
        },
        decrement: function (_0xbdd9c, _0x56135e) {
          return [
            "<a href='javascript:;' class='" +
              _0x5a4a5e +
              "_decrement'>" +
              tombolMinus +
              '</a>',
          ]
        },
        increment: function (_0x2dd935, _0x15fa4a) {
          return [
            "<a href='javascript:;' class='" +
              _0x5a4a5e +
              "_increment'>" +
              tombolPlus +
              '</a>',
          ]
        },
        image: function (_0x1bc047, _0x1cdf9b) {
          return [
            "<a href='" +
              _0x1bc047.get(_0x1cdf9b.attr) +
              "'><img src='" +
              _0x1bc047.get(_0x1cdf9b.attr) +
              "'/></a>",
          ]
        },
        name: function (_0x4b198e, _0x5578e1) {
          return (
            "<a href='" +
            _0x4b198e.get(_0x5578e1.attr) +
            "'>" +
            _0x5578e1.text +
            '</a>'
          )
        },
        input: function (_0x25c365, _0x23f2bb) {
          return [
            "<input type='text' value='" +
              _0x25c365.get(_0x23f2bb.attr) +
              "' class='" +
              _0x5a4a5e +
              "_input'/>",
          ]
        },
        berat: function (_0x27f1d0, _0x28e0fd) {
          return [_0x27f1d0.get(_0x28e0fd.attr)]
        },
        totalberat: function (_0x240f9e, _0x42df41) {
          return (
            "<span class='total-berat' data-berat='" +
            _0x240f9e.get(_0x42df41.attr) +
            "'>" +
            'berat ' +
            formatBerat(_0x240f9e.get(_0x42df41.attr)) +
            '</span>'
          )
        },
        catatan: function (_0x14f1ff, _0x54c021) {
          return [_0x14f1ff.get(_0x54c021.attr)]
        },
        remove: function (_0x3ee1b0, _0x2d3a11) {
          return [
            "<a href='javascript:;' class='" +
              _0x5a4a5e +
              "_remove'>" +
              tombolRemove +
              '</a>',
          ]
        },
      }
      function _0x4c8d43(_0x2a6657) {
        var _0x19e100 = _0x2a6657 || {}
        var _0x137238 = {
          attr: '',
          label: '',
        }
        return (
          (_0x137238.view = 'attr'),
          (_0x137238.text = ''),
          (_0x137238.className = ''),
          (_0x137238.hide = false),
          _0x36bb2d.extend(_0x137238, _0x19e100)
        )
      }
      function _0xe7f1c2(_0x4f6aa1, _0x53e5c6) {
        var _0x41a3f7 = _0x527f47(_0x53e5c6.view)
          ? _0x53e5c6.view
          : _0x5ce42e(_0x53e5c6.view) && _0x527f47(_0x135a04[_0x53e5c6.view])
          ? _0x135a04[_0x53e5c6.view]
          : _0x135a04.attr
        return _0x41a3f7.call(_0x36bb2d, _0x4f6aa1, _0x53e5c6)
      }
      _0x36bb2d.extend({
        writeCart: function (_0x4b01d0) {
          var _0x4ab68b = _0x12c2b9.cartStyle.toLowerCase(),
            _0x2b77cd = _0x4ab68b === 'table',
            _0x8ecaa1 = _0x2b77cd ? 'tr' : 'div',
            _0x499c99 = _0x2b77cd ? 'th' : 'div',
            _0x1aebcf = _0x2b77cd ? 'td' : 'div',
            _0x4be919 = _0x2b77cd ? 'thead' : 'div',
            _0x17a73c = _0x36bb2d['$create'](_0x4ab68b),
            _0x309478 = _0x36bb2d['$create'](_0x4be919),
            _0x4d782c = _0x36bb2d['$create'](_0x8ecaa1).addClass('headerRow'),
            _0x26fdbf = _0x36bb2d['$'](_0x4b01d0),
            _0x2f3fa1,
            _0x1fe87b,
            _0x6f1e5a,
            _0xd329b8,
            _0x460bfb
          $('.ck-btn,.harga-total,#total-harga').hide()
          $('.keranjang-kosong').show()
          _0x26fdbf.html(' ').append(_0x17a73c)
          _0x17a73c.append(cart_kosong)
          _0x309478.append(_0x4d782c)
          for (
            _0xd329b8 = 0, _0x460bfb = _0x12c2b9.cartColumns.length;
            _0xd329b8 < _0x460bfb;
            _0xd329b8 += 1
          ) {
            ;(_0x2f3fa1 = _0x4c8d43(_0x12c2b9.cartColumns[_0xd329b8])),
              (_0x1fe87b =
                'item-' +
                (_0x2f3fa1.attr ||
                  _0x2f3fa1.view ||
                  _0x2f3fa1.label ||
                  _0x2f3fa1.text ||
                  'cell') +
                ' ' +
                _0x2f3fa1.className),
              (_0x6f1e5a = _0x2f3fa1.label || ''),
              _0x4d782c.append(
                _0x36bb2d['$create'](_0x499c99)
                  .addClass(_0x1fe87b)
                  .html(_0x6f1e5a)
              )
          }
          return (
            _0x36bb2d.each(function (_0x104780, _0x275ae5) {
              _0x36bb2d.createCartRow(
                _0x104780,
                _0x275ae5,
                _0x8ecaa1,
                _0x1aebcf,
                _0x17a73c
              )
            }),
            _0x17a73c
          )
        },
        createCartRow: function (
          _0x2b295b,
          _0x3fce1d,
          _0x59b366,
          _0x43d72a,
          _0x19f646
        ) {
          var _0x549c3e = _0x36bb2d['$create'](_0x59b366)
              .addClass(
                'itemRow row-' +
                  _0x3fce1d +
                  ' ' +
                  (_0x3fce1d % 2 ? 'even' : 'odd')
              )
              .attr('id', 'cartItem_' + _0x2b295b.id()),
            _0x4c7450,
            _0x43aa30,
            _0x3338f9,
            _0x18e1ee,
            _0x5f4002,
            _0x13a281
          $('.empty-cart,.keranjang-kosong').hide()
          $('.ck-btn,.harga-total,#total-harga').show()
          _0x19f646.append(_0x549c3e)
          for (
            _0x4c7450 = 0, _0x43aa30 = _0x12c2b9.cartColumns.length;
            _0x4c7450 < _0x43aa30;
            _0x4c7450 += 1
          ) {
            ;(_0x3338f9 = _0x4c8d43(_0x12c2b9.cartColumns[_0x4c7450])),
              (_0x18e1ee =
                'item-' +
                (_0x3338f9.attr ||
                  (_0x5ce42e(_0x3338f9.view)
                    ? _0x3338f9.view
                    : _0x3338f9.label || _0x3338f9.text || 'cell')) +
                ' ' +
                _0x3338f9.className),
              (_0x5f4002 = _0xe7f1c2(_0x2b295b, _0x3338f9)),
              (_0x13a281 = _0x36bb2d['$create'](_0x43d72a)
                .addClass(_0x18e1ee)
                .html(_0x5f4002)),
              _0x549c3e.append(_0x13a281),
              $('.item-size').each(function () {
                var _0x195a54 = $(this).text()
                _0x195a54 == '' &&
                  $(this).parents('.itemRow').find('.item-size').remove()
              })
          }
          return _0x549c3e
        },
      })
      _0x36bb2d.Item = function (_0x57faa3) {
        var _0x2291ce = {
            id: _0x2291ce.id || _0x9af6b8 + _0x30f85a,
            id: _0x9af6b8 + _0x30f85a,
            price: parseFloat(
              _0x2291ce.price
                .replace(_0x36bb2d.currency().decimal, '.')
                .replace(/[^0-9]/g, '')
            ),
            price: 0,
          },
          _0x176ee4 = this
        _0xa159e8(_0x57faa3) && _0x36bb2d.extend(_0x2291ce, _0x57faa3)
        _0x30f85a += 1
        while (!_0x58b746(_0x299d86[_0x2291ce.id])) {
          _0x30f85a += 1
        }
        function _0x58b0af() {
          if (_0x5ce42e(_0x2291ce.price)) {
          }
          isNaN(_0x2291ce.price) && (_0x2291ce.price = 0)
          if (_0x2291ce.price < 0) {
          }
          _0x5ce42e(_0x2291ce.quantity) &&
            (_0x2291ce.quantity = parseInt(
              _0x2291ce.quantity.replace(_0x36bb2d.currency().delimiter, ''),
              10
            ))
          isNaN(_0x2291ce.quantity) && (_0x2291ce.quantity = 1)
          _0x2291ce.quantity <= 0 && _0x176ee4.remove()
        }
        _0x176ee4.get = function (_0x1e47ba, _0x150ea7) {
          var _0x5b0bdd = !_0x150ea7
          if (_0x58b746(_0x1e47ba)) {
            return _0x1e47ba
          }
          return _0x527f47(_0x2291ce[_0x1e47ba])
            ? _0x2291ce[_0x1e47ba].call(_0x176ee4)
            : !_0x58b746(_0x2291ce[_0x1e47ba])
            ? _0x2291ce[_0x1e47ba]
            : _0x527f47(_0x176ee4[_0x1e47ba]) && _0x5b0bdd
            ? _0x176ee4[_0x1e47ba].call(_0x176ee4)
            : !_0x58b746(_0x176ee4[_0x1e47ba]) && _0x5b0bdd
            ? _0x176ee4[_0x1e47ba]
            : _0x2291ce[_0x1e47ba]
        }
        _0x176ee4.set = function (_0x1ec49b, _0x38e73d) {
          !_0x58b746(_0x1ec49b) &&
            ((_0x2291ce[_0x1ec49b.toLowerCase()] = _0x38e73d),
            (_0x1ec49b.toLowerCase() === 'price' ||
              _0x1ec49b.toLowerCase() === 'quantity') &&
              _0x58b0af())
          return _0x176ee4
        }
        _0x176ee4.equals = function (_0x4c428f) {
          for (var _0x492de5 in _0x2291ce) {
            if (Object.prototype.hasOwnProperty.call(_0x2291ce, _0x492de5)) {
              if (_0x492de5 !== 'quantity' && _0x492de5 !== 'id') {
                if (_0x4c428f.get(_0x492de5) !== _0x2291ce[_0x492de5]) {
                  return false
                }
              }
            }
          }
          return true
        }
        _0x176ee4.options = function () {
          var _0x25a8b7 = {}
          return (
            _0x36bb2d.each(
              _0x2291ce,
              function (_0x57bb73, _0x18902b, _0x4b4070) {
                var _0x1609d6 = true
                _0x36bb2d.each(
                  _0x176ee4.reservedFields(),
                  function (_0x3becc0) {
                    if (_0x3becc0 === _0x4b4070) {
                      _0x1609d6 = false
                    }
                    return _0x1609d6
                  }
                )
                _0x1609d6 && (_0x25a8b7[_0x4b4070] = _0x176ee4.get(_0x4b4070))
              }
            ),
            _0x25a8b7
          )
        }
        _0x58b0af()
      }
      _0x36bb2d.Item['_'] = _0x36bb2d.Item.prototype = {
        increment: function (_0x56edf2) {
          var _0x55da1f = _0x56edf2 || 1
          _0x55da1f = parseInt(_0x55da1f, 10)
          this.quantity(this.quantity() + _0x55da1f)
          if (this.quantity() < 1) {
            return this.remove(), null
          }
          return this
        },
        decrement: function (_0x2cba13) {
          var _0x404c71 = _0x2cba13 || 1
          return this.increment(-parseInt(_0x404c71, 10))
        },
        remove: function (_0x2a6f0f) {
          var _0x3f2c32 = _0x36bb2d.trigger('beforeRemove', [
            _0x299d86[this.id()],
          ])
          if (_0x3f2c32 === false) {
            return false
          }
          return (
            delete _0x299d86[this.id()], !_0x2a6f0f && _0x36bb2d.update(), null
          )
        },
        reservedFields: function () {
          return [
            'quantity',
            'id',
            'item_number',
            'price',
            'name',
            'shipping',
            'tax',
            'taxRate',
          ]
        },
        fields: function () {
          var _0x5a8664 = {},
            _0x29697a = this
          return (
            _0x36bb2d.each(_0x29697a.reservedFields(), function (_0x40b9cd) {
              _0x29697a.get(_0x40b9cd) &&
                (_0x5a8664[_0x40b9cd] = _0x29697a.get(_0x40b9cd))
            }),
            _0x5a8664
          )
        },
        quantity: function (_0x23c279) {
          return _0x58b746(_0x23c279)
            ? parseInt(this.get('quantity', true) || 1, 10)
            : this.set('quantity', _0x23c279)
        },
        price: function (_0x27be75) {
          return _0x58b746(_0x27be75)
            ? parseFloat(
                this.get('price', true)
                  .toString()
                  .replace(_0x36bb2d.currency().symbol, '')
                  .replace(_0x36bb2d.currency().delimiter, '') || 1
              )
            : this.set(
                'price',
                parseFloat(
                  _0x27be75
                    .toString()
                    .replace(_0x36bb2d.currency().symbol, '')
                    .replace(_0x36bb2d.currency().delimiter, '')
                )
              )
        },
        id: function () {
          return this.get('id', false)
        },
        berat: function (_0x421cce) {
          return _0x58b746(_0x421cce)
            ? parseInt(this.get('berat', true) || 1, 10)
            : this.set('berat', _0x421cce)
        },
        totalberat: function () {
          return this.quantity() * this.berat()
        },
        total: function () {
          return this.quantity() * this.price()
        },
      }
      _0x36bb2d.extend({
        checkout: function (_0x3d7c74) {
          if (!_0x3d7c74.url) {
            return _0x36bb2d.error('URL required for SendForm Checkout')
          }
          var _0x25f5c0 = {
              shipping: _0x36bb2d.shipping(),
              totalBerat: _0x36bb2d.totalberat(),
              grandTotal: _0x36bb2d.grandTotal(),
              total: _0x36bb2d.total(),
              itemCount: _0x36bb2d.find({}).length,
            },
            _0x1f1966 = _0x3d7c74.url,
            _0x4c4acc = _0x3d7c74.method === 'GET' ? 'GET' : 'POST'
          _0x36bb2d.each(function (_0x2692fa, _0x3d5947) {
            var _0xf9de41 = _0x3d5947 + 1,
              _0x45e558 = [],
              _0x424376
            _0x25f5c0['item_thumb_' + _0xf9de41] = _0x2692fa.get('thumb')
            _0x25f5c0['item_name_' + _0xf9de41] = _0x2692fa.get('name')
            _0x25f5c0['item_quantity_' + _0xf9de41] = _0x2692fa.quantity()
            _0x25f5c0['item_price_' + _0xf9de41] = _0x2692fa.price()
            _0x25f5c0['item_berat_' + _0xf9de41] = _0x2692fa.berat()
            _0x36bb2d.each(
              _0x2692fa.options(),
              function (_0x42c804, _0x142936, _0x204c70) {
                _0x424376 = true
                _0x36bb2d.each(
                  _0x12c2b9.excludeFromCheckout,
                  function (_0x4505a0) {
                    _0x4505a0 === _0x204c70 && (_0x424376 = false)
                  }
                )
                _0x424376 && _0x45e558.push(_0x204c70 + ': ' + _0x42c804)
              }
            )
            _0x25f5c0['item_options_' + _0xf9de41] = _0x45e558.join(', ')
          })
          _0x3d7c74.success && (_0x25f5c0.return = _0x3d7c74.success)
          _0x3d7c74.cancel && (_0x25f5c0.cancel_return = _0x3d7c74.cancel)
          _0x3d7c74.extra_data &&
            (_0x25f5c0 = _0x36bb2d.extend(_0x25f5c0, _0x3d7c74.extra_data))
          var _0x4549e1 = {
            type: _0x4c4acc,
            url: _0x1f1966,
            dataType: 'json',
            data: _0x25f5c0,
            success: function (_0x5f2fe1) {},
          }
          $.ajax(_0x4549e1)
        },
      })
      _0x2eb1bd = {
        bind: function (_0x2d89f5, _0x174991) {
          if (!_0x527f47(_0x174991)) {
            return this
          }
          !this['_events'] && (this['_events'] = {})
          var _0x382966 = _0x2d89f5.split(/ +/)
          return (
            _0x36bb2d.each(_0x382966, function (_0x5a9b49) {
              if (this['_events'][_0x5a9b49] === true) {
                _0x174991.apply(this)
              } else {
                !_0x58b746(this['_events'][_0x5a9b49])
                  ? this['_events'][_0x5a9b49].push(_0x174991)
                  : (this['_events'][_0x5a9b49] = [_0x174991])
              }
            }),
            this
          )
        },
        trigger: function (_0x3a349b, _0x6bcf88) {
          var _0x20d2b6 = true,
            _0x36f6b9,
            _0x403205
          !this['_events'] && (this['_events'] = {})
          if (
            !_0x58b746(this['_events'][_0x3a349b]) &&
            _0x527f47(this['_events'][_0x3a349b][0])
          ) {
            for (
              _0x36f6b9 = 0, _0x403205 = this['_events'][_0x3a349b].length;
              _0x36f6b9 < _0x403205;
              _0x36f6b9 += 1
            ) {
              _0x20d2b6 = this['_events'][_0x3a349b][_0x36f6b9].apply(
                this,
                _0x6bcf88 || []
              )
            }
          }
          if (_0x20d2b6 === false) {
            return false
          }
          return true
        },
      }
      _0x36bb2d.extend(_0x2eb1bd)
      _0x36bb2d.extend(_0x36bb2d.Item['_'], _0x2eb1bd)
      var _0x272ed4 = {
        beforeAdd: null,
        afterAdd: null,
        load: null,
        beforeSave: null,
        afterSave: null,
        update: null,
        ready: null,
        checkoutSuccess: null,
        checkoutFail: null,
        beforeCheckout: null,
        beforeRemove: null,
      }
      _0x447ce1 = _0x272ed4
      _0x36bb2d(_0x447ce1)
      _0x36bb2d.each(_0x447ce1, function (_0x220f27, _0xca7a4, _0x8f1b60) {
        _0x36bb2d.bind(_0x8f1b60, function () {
          _0x527f47(_0x12c2b9[_0x8f1b60]) &&
            _0x12c2b9[_0x8f1b60].apply(this, arguments)
        })
      })
      _0x36bb2d.bind('beforeAdd', function (_0xa4e602) {
        if (_0x36bb2d.has(_0xa4e602)) {
          return (
            $('.info-write').text(
              'Produk ini sudah tersedia di keranjang Anda'
            ),
            $('#informasi').show(),
            $('.info-button-ok').click(function () {
              return $('#informasi').hide(), false
            }),
            false
          )
        } else {
          $('.notif-tambah-product')
            .html('Produk berhasil ditambahkan')
            .fadeIn('fast')
            .delay(1000)
            .fadeOut(1000)
        }
      })
      _0x36bb2d.extend({
        toCurrency: function (_0x1b61d0, _0x37349f) {
          var _0x5c116e = {
            symbol: 'Rp',
            decimal: '',
            delimiter: '.',
            accuracy: 0,
            after: false,
          }
          var _0x47f91f = parseFloat(_0x1b61d0),
            _0xb3c0e = _0x37349f || {},
            _0x46d69e = _0x36bb2d.extend(
              _0x36bb2d.extend(_0x5c116e, _0x36bb2d.currency()),
              _0xb3c0e
            ),
            _0x2df330 = _0x47f91f.toFixed(_0x46d69e.accuracy).split('.'),
            _0x57742c = _0x2df330[1],
            _0x48fd49 = _0x2df330[0]
          return (
            (_0x48fd49 = _0x36bb2d
              .chunk(_0x48fd49.reverse(), 3)
              .join(_0x46d69e.delimiter.reverse())
              .reverse()),
            (!_0x46d69e.after ? _0x46d69e.symbol : '') +
              _0x48fd49 +
              (_0x57742c ? _0x46d69e.decimal + _0x57742c : '') +
              (_0x46d69e.after ? _0x46d69e.symbol : '')
          )
        },
        chunk: function (_0x2060e0, _0x11ba9c) {
          typeof _0x11ba9c === 'undefined' && (_0x11ba9c = 2)
          var _0x32a42b = _0x2060e0.match(
            new RegExp('.{1,' + _0x11ba9c + '}', 'g')
          )
          return _0x32a42b || []
        },
      })
      String.prototype.reverse = function () {
        return this.split('').reverse().join('')
      }
      _0x36bb2d.extend({
        currency: function (_0x37d406) {
          if (_0x5ce42e(_0x37d406) && !_0x58b746(_0x11828a[_0x37d406])) {
            _0x12c2b9.currency = _0x37d406
          } else {
            if (_0xa159e8(_0x37d406)) {
              _0x11828a[_0x37d406.code] = _0x37d406
              _0x12c2b9.currency = _0x37d406.code
            } else {
              return _0x11828a[_0x12c2b9.currency]
            }
          }
        },
      })
      _0x36bb2d.extend({
        bindOutlets: function (_0x23808d) {
          _0x36bb2d.each(_0x23808d, function (_0x283d33, _0x9173a, _0x826eb) {
            _0x36bb2d.bind('update', function () {
              _0x36bb2d.setOutlet('.' + _0x5a4a5e + '_' + _0x826eb, _0x283d33)
            })
          })
        },
        setOutlet: function (_0x372a8c, _0x2dc28d) {
          var _0x290c6e = _0x2dc28d.call(_0x36bb2d, _0x372a8c)
          if (_0xa159e8(_0x290c6e) && _0x290c6e.el) {
            _0x36bb2d['$'](_0x372a8c).html(' ').append(_0x290c6e)
          } else {
            !_0x58b746(_0x290c6e) && _0x36bb2d['$'](_0x372a8c).html(_0x290c6e)
          }
        },
        bindInputs: function (_0x1d2170) {
          _0x36bb2d.each(_0x1d2170, function (_0xdf2c22) {
            _0x36bb2d.setInput(
              '.' + _0x5a4a5e + '_' + _0xdf2c22.selector,
              _0xdf2c22.event,
              _0xdf2c22.callback
            )
          })
        },
        setInput: function (_0x497439, _0x23fdc9, _0x36ff62) {
          _0x36bb2d['$'](_0x497439).live(_0x23fdc9, _0x36ff62)
        },
      })
      _0x36bb2d.ELEMENT = function (_0xcb78ad) {
        this.create(_0xcb78ad)
        this.selector = _0xcb78ad || null
      }
      _0x36bb2d.extend(_0x5e7ced, {
        jQuery: {
          passthrough: function (_0x5a6f94, _0x1d4d0c) {
            if (_0x58b746(_0x1d4d0c)) {
              return this.el[_0x5a6f94]()
            }
            return this.el[_0x5a6f94](_0x1d4d0c), this
          },
          text: function (_0x1dce7d) {
            return this.passthrough(_0x17f49a, _0x1dce7d)
          },
          html: function (_0x11565b) {
            return this.passthrough('html', _0x11565b)
          },
          val: function (_0x1d06cc) {
            return this.passthrough('val', _0x1d06cc)
          },
          append: function (_0x2bc91b) {
            var _0x10bf39 = _0x2bc91b.el || _0x2bc91b
            return this.el.append(_0x10bf39), this
          },
          attr: function (_0x34e28d, _0x47a7dd) {
            if (_0x58b746(_0x47a7dd)) {
              return this.el.attr(_0x34e28d)
            }
            return this.el.attr(_0x34e28d, _0x47a7dd), this
          },
          remove: function () {
            this.el.remove()
            return this
          },
          addClass: function (_0x4afe56) {
            return this.el.addClass(_0x4afe56), this
          },
          removeClass: function (_0x555326) {
            return this.el.removeClass(_0x555326), this
          },
          each: function (_0x363b19) {
            return this.passthrough('each', _0x363b19)
          },
          click: function (_0x4e73e2) {
            return this.passthrough(_0x30f732, _0x4e73e2)
          },
          live: function (_0x3a4df5, _0x456eb8) {
            _0x155b7a(_0x1dc22e).delegate(this.selector, _0x3a4df5, _0x456eb8)
            return this
          },
          parent: function () {
            return _0x36bb2d['$'](this.el.parent())
          },
          find: function (_0x300be2) {
            return _0x36bb2d['$'](this.el.find(_0x300be2))
          },
          closest: function (_0x58c87d) {
            return _0x36bb2d['$'](this.el.closest(_0x58c87d))
          },
          tag: function () {
            return this.el[0].tagName
          },
          descendants: function () {
            return _0x36bb2d['$'](this.el.find('*'))
          },
          submit: function () {
            return this.el.submit()
          },
          create: function (_0x47a3e9) {
            this.el = _0x155b7a(_0x47a3e9)
          },
        },
      })
      _0x36bb2d.ELEMENT['_'] = _0x36bb2d.ELEMENT.prototype
      _0x36bb2d.ready(_0x36bb2d.setupViewTool)
      _0x36bb2d.ready(function () {
        _0x36bb2d.bindOutlets({
          total: function () {
            return (
              "<span id='totalharga' data-harga='" +
              _0x36bb2d.total() +
              "'>" +
              _0x36bb2d.toCurrency(_0x36bb2d.total()) +
              '</span>'
            )
          },
          totalberat: function () {
            return (
              "<span id='total-berat' data-berat='" +
              _0x36bb2d.totalberat() +
              "'>" +
              formatBerat(_0x36bb2d.totalberat()) +
              '</span>'
            )
          },
          quantity: function () {
            return _0x36bb2d.quantity()
          },
          items: function (_0x42e0dc) {
            _0x36bb2d.writeCart(_0x42e0dc)
          },
          tax: function () {
            return _0x36bb2d.toCurrency(_0x36bb2d.tax())
          },
          taxRate: function () {
            return _0x36bb2d.taxRate().toFixed()
          },
          shipping: function () {
            return _0x36bb2d.toCurrency(_0x36bb2d.shipping())
          },
          grandTotal: function () {
            return [
              "<span id='totalpembayaran' class='totalpembayaran' data-normal-total='" +
                _0x36bb2d.grandTotal() +
                "' data-total='" +
                _0x36bb2d.grandTotal() +
                "'>" +
                _0x36bb2d.toCurrency(_0x36bb2d.grandTotal()) +
                '</span',
            ]
          },
        }),
          _0x36bb2d.bindInputs([
            {
              selector: 'checkout',
              event: 'click',
              callback: function () {
                _0x36bb2d.checkout()
              },
            },
            {
              selector: 'empty',
              event: 'click',
              callback: function () {
                _0x36bb2d.empty()
              },
            },
            {
              selector: 'increment',
              event: 'click',
              callback: function () {
                _0x36bb2d
                  .find(
                    _0x36bb2d['$'](this)
                      .closest('.itemRow')
                      .attr('id')
                      .split('_')[1]
                  )
                  .increment(),
                  _0x36bb2d.update()
              },
            },
            {
              selector: 'decrement',
              event: 'click',
              callback: function () {
                _0x36bb2d
                  .find(
                    _0x36bb2d['$'](this)
                      .closest('.itemRow')
                      .attr('id')
                      .split('_')[1]
                  )
                  .decrement()
                _0x36bb2d.update()
              },
            },
            {
              selector: 'remove',
              event: 'click',
              callback: function () {
                _0x36bb2d
                  .find(
                    _0x36bb2d['$'](this)
                      .closest('.itemRow')
                      .attr('id')
                      .split('_')[1]
                  )
                  .remove()
              },
            },
            {
              selector: 'input',
              event: 'change',
              callback: function () {
                var _0x3326aa = _0x36bb2d['$'](this),
                  _0x5427fc = _0x3326aa.parent(),
                  _0x15bd37 = _0x5427fc.attr('class').split(' ')
                _0x36bb2d.each(_0x15bd37, function (_0x50d82b) {
                  if (_0x50d82b.match(/item-.+/i)) {
                    var _0x156179 = _0x50d82b.split('-')[1]
                    _0x36bb2d
                      .find(
                        _0x5427fc.closest('.itemRow').attr('id').split('_')[1]
                      )
                      .set(_0x156179, _0x3326aa.val())
                    _0x36bb2d.update()
                    return
                  }
                })
              },
            },
            {
              selector: 'shelfItem .item_add',
              event: 'click',
              callback: function () {
                var _0x44945b = _0x36bb2d['$'](this),
                  _0x1aea09 = {}
                _0x44945b
                  .closest('.' + _0x5a4a5e + '_shelfItem')
                  .descendants()
                  .each(function (_0xb07a50, _0x5272f0) {
                    var _0x5f3286 = _0x36bb2d['$'](_0x5272f0)
                    if (
                      _0x5f3286.attr('class') &&
                      _0x5f3286.attr('class').match(/item_.+/) &&
                      !_0x5f3286.attr('class').match(/item_add/)
                    ) {
                      _0x36bb2d.each(
                        _0x5f3286.attr('class').split(' '),
                        function (_0x96b86b) {
                          var _0x19cee2, _0x693233, _0x5e7f5c
                          if (_0x96b86b.match(/item_.+/)) {
                            _0x19cee2 = _0x96b86b.split('_')[1]
                            _0x693233 = ''
                            switch (_0x5f3286.tag().toLowerCase()) {
                              case 'input':
                              case 'textarea':
                              case 'select':
                                _0x5e7f5c = _0x5f3286.attr('type')
                                ;(!_0x5e7f5c ||
                                  ((_0x5e7f5c.toLowerCase() === 'checkbox' ||
                                    _0x5e7f5c.toLowerCase() === 'radio') &&
                                    _0x5f3286.attr('checked')) ||
                                  _0x5e7f5c.toLowerCase() === 'text' ||
                                  _0x5e7f5c.toLowerCase() === 'number') &&
                                  (_0x693233 = _0x5f3286.val())
                                break
                              case 'img':
                                _0x693233 = _0x5f3286.attr('src')
                                break
                              default:
                                _0x693233 = _0x5f3286.text()
                                break
                            }
                            _0x693233 !== null &&
                              _0x693233 !== '' &&
                              (_0x1aea09[_0x19cee2.toLowerCase()] = _0x1aea09[
                                _0x19cee2.toLowerCase()
                              ]
                                ? _0x1aea09[_0x19cee2.toLowerCase()] +
                                  ', ' +
                                  _0x693233
                                : _0x693233)
                          }
                        }
                      )
                    }
                  })
                _0x36bb2d.add(_0x1aea09)
              },
            },
          ])
      })
      if (_0x1dc22e.addEventListener) {
        _0x9eb04a.DOMContentLoaded = function () {
          _0x1dc22e.removeEventListener(
            'DOMContentLoaded',
            DOMContentLoaded,
            false
          )
          _0x36bb2d.init()
        }
      } else {
        if (_0x1dc22e.attachEvent) {
          _0x9eb04a.DOMContentLoaded = function () {
            _0x1dc22e.readyState === 'complete' &&
              (_0x1dc22e.detachEvent('onreadystatechange', DOMContentLoaded),
              _0x36bb2d.init())
          }
        }
      }
      function _0xd022e2() {
        if (_0x36bb2d.isReady) {
          return
        }
        try {
          _0x1dc22e.documentElement.doScroll('left')
        } catch (_0x50c9aa) {
          setTimeout(_0xd022e2, 1)
          return
        }
        _0x36bb2d.init()
      }
      function _0xf148e8() {
        if (_0x1dc22e.readyState === 'complete') {
          return setTimeout(_0x36bb2d.init, 1)
        }
        if (_0x1dc22e.addEventListener) {
          _0x1dc22e.addEventListener(
            'DOMContentLoaded',
            DOMContentLoaded,
            false
          )
          _0x9eb04a.addEventListener('load', _0x36bb2d.init, false)
        } else {
          if (_0x1dc22e.attachEvent) {
            _0x1dc22e.attachEvent('onreadystatechange', DOMContentLoaded)
            _0x9eb04a.attachEvent('onload', _0x36bb2d.init)
            var _0x3e86d9 = false
            try {
              _0x3e86d9 = _0x9eb04a.frameElement === null
            } catch (_0x260f9b) {}
            _0x1dc22e.documentElement.doScroll && _0x3e86d9 && _0xd022e2()
          }
        }
      }
      return _0xf148e8(), _0x36bb2d
    }
  _0x9eb04a.simpleCart = _0x109a11()
})(window, document)
var JSON
JSON || (JSON = {})
;(function () {
  function _0x1b851c(_0x461359) {
    return _0x461359 < 10 ? '0' + _0x461359 : _0x461359
  }
  function _0x3ddb08(_0x28234c) {
    ;/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.lastIndex = 0
    return /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.test(
      _0x28234c
    )
      ? '"' +
          _0x28234c.replace(
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            function (_0x1b92db) {
              var _0x58d344 = _0x2d8d4b[_0x1b92db]
              return typeof _0x58d344 === 'string'
                ? _0x58d344
                : '\\u' +
                    ('0000' + _0x1b92db.charCodeAt(0).toString(16)).slice(-4)
            }
          ) +
          '"'
      : '"' + _0x28234c + '"'
  }
  function _0x47f9cd(_0x377203, _0x217167) {
    var _0x10659a,
      _0x205453,
      _0x5a6439,
      _0x2362d2,
      _0x1e6ffd = _0x1dcdfb,
      _0xe8da96,
      _0x21e055 = _0x217167[_0x377203]
    _0x21e055 &&
      typeof _0x21e055 === 'object' &&
      typeof _0x21e055.toJSON === 'function' &&
      (_0x21e055 = _0x21e055.toJSON(_0x377203))
    typeof _0x62f75f === 'function' &&
      (_0x21e055 = _0x62f75f.call(_0x217167, _0x377203, _0x21e055))
    switch (typeof _0x21e055) {
      case 'string':
        return _0x3ddb08(_0x21e055)
      case 'number':
        return isFinite(_0x21e055) ? String(_0x21e055) : 'null'
      case 'boolean':
      case 'null':
        return String(_0x21e055)
      case 'object':
        if (!_0x21e055) {
          return 'null'
        }
        ;(_0x1dcdfb += _0x44f672), (_0xe8da96 = [])
        if (Object.prototype.toString.apply(_0x21e055) === '[object Array]') {
          _0x2362d2 = _0x21e055.length
          for (_0x10659a = 0; _0x10659a < _0x2362d2; _0x10659a += 1) {
            _0xe8da96[_0x10659a] = _0x47f9cd(_0x10659a, _0x21e055) || 'null'
          }
          _0x5a6439 =
            _0xe8da96.length === 0
              ? '[]'
              : _0x1dcdfb
              ? '[\n' +
                _0x1dcdfb +
                _0xe8da96.join(',\n' + _0x1dcdfb) +
                '\n' +
                _0x1e6ffd +
                ']'
              : '[' + _0xe8da96.join(',') + ']'
          _0x1dcdfb = _0x1e6ffd
          return _0x5a6439
        }
        if (_0x62f75f && typeof _0x62f75f === 'object') {
          _0x2362d2 = _0x62f75f.length
          for (_0x10659a = 0; _0x10659a < _0x2362d2; _0x10659a += 1) {
            typeof _0x62f75f[_0x10659a] === 'string' &&
              ((_0x205453 = _0x62f75f[_0x10659a]),
              (_0x5a6439 = _0x47f9cd(_0x205453, _0x21e055)) &&
                _0xe8da96.push(
                  _0x3ddb08(_0x205453) + (_0x1dcdfb ? ': ' : ':') + _0x5a6439
                ))
          }
        } else {
          for (_0x205453 in _0x21e055)
            Object.prototype.hasOwnProperty.call(_0x21e055, _0x205453) &&
              (_0x5a6439 = _0x47f9cd(_0x205453, _0x21e055)) &&
              _0xe8da96.push(
                _0x3ddb08(_0x205453) + (_0x1dcdfb ? ': ' : ':') + _0x5a6439
              )
        }
        ;(_0x5a6439 =
          _0xe8da96.length === 0
            ? '{}'
            : _0x1dcdfb
            ? '{\n' +
              _0x1dcdfb +
              _0xe8da96.join(',\n' + _0x1dcdfb) +
              '\n' +
              _0x1e6ffd +
              '}'
            : '{' + _0xe8da96.join(',') + '}'),
          (_0x1dcdfb = _0x1e6ffd)
        return _0x5a6439
    }
  }
  if (typeof Date.prototype.toJSON !== 'function') {
    Date.prototype.toJSON = function () {
      return isFinite(this.valueOf())
        ? this.getUTCFullYear() +
            '-' +
            _0x1b851c(this.getUTCMonth() + 1) +
            '-' +
            _0x1b851c(this.getUTCDate()) +
            'T' +
            _0x1b851c(this.getUTCHours()) +
            ':' +
            _0x1b851c(this.getUTCMinutes()) +
            ':' +
            _0x1b851c(this.getUTCSeconds()) +
            'Z'
        : null
    }
    String.prototype.toJSON =
      Number.prototype.toJSON =
      Boolean.prototype.toJSON =
        function () {
          return this.valueOf()
        }
  }
  var _0x10fb85 = {}
  _0x10fb85['\b'] = '\\b'
  _0x10fb85['\t'] = '\\t'
  _0x10fb85['\n'] = '\\n'
  _0x10fb85['\f'] = '\\f'
  _0x10fb85['\r'] = '\\r'
  _0x10fb85['"'] = '\\"'
  _0x10fb85['\\'] = '\\\\'
  var _0x1dcdfb,
    _0x44f672,
    _0x2d8d4b = _0x10fb85,
    _0x62f75f
  if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (_0xf00da0, _0x44fa7b, _0x1f2156) {
      var _0x1ce855
      _0x44f672 = _0x1dcdfb = ''
      if (typeof _0x1f2156 === 'number') {
        for (_0x1ce855 = 0; _0x1ce855 < _0x1f2156; _0x1ce855 += 1) {
          _0x44f672 += ' '
        }
      } else {
        typeof _0x1f2156 === 'string' && (_0x44f672 = _0x1f2156)
      }
      if (
        (_0x62f75f = _0x44fa7b) &&
        typeof _0x44fa7b !== 'function' &&
        (typeof _0x44fa7b !== 'object' || typeof _0x44fa7b.length !== 'number')
      ) {
        throw Error('JSON.stringify')
      }
      var _0x567a10 = { '': _0xf00da0 }
      return _0x47f9cd('', _0x567a10)
    }
  }
  if (typeof JSON.parse !== 'function') {
    JSON.parse = function (_0x2402d8, _0x75c4c1) {
      function _0x530994(_0x2dffa3, _0x543618) {
        var _0x57b5e3,
          _0xcf9047,
          _0x1da672 = _0x2dffa3[_0x543618]
        if (_0x1da672 && typeof _0x1da672 === 'object') {
          for (_0x57b5e3 in _0x1da672)
            Object.prototype.hasOwnProperty.call(_0x1da672, _0x57b5e3) &&
              ((_0xcf9047 = _0x530994(_0x1da672, _0x57b5e3)),
              _0xcf9047 !== void 0
                ? (_0x1da672[_0x57b5e3] = _0xcf9047)
                : delete _0x1da672[_0x57b5e3])
        }
        return _0x75c4c1.call(_0x2dffa3, _0x543618, _0x1da672)
      }
      var _0x37813d,
        _0x2402d8 = String(_0x2402d8)
      ;/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.lastIndex = 0
      ;/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g.test(
        _0x2402d8
      ) &&
        (_0x2402d8 = _0x2402d8.replace(
          /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          function (_0x5f3e70) {
            return (
              '\\u' + ('0000' + _0x5f3e70.charCodeAt(0).toString(16)).slice(-4)
            )
          }
        ))
      if (
        /^[\],:{}\s]*$/.test(
          _0x2402d8
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              ']'
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
        )
      ) {
        return (
          (_0x37813d = eval('(' + _0x2402d8 + ')')),
          typeof _0x75c4c1 === 'function'
            ? _0x530994({ '': _0x37813d }, '')
            : _0x37813d
        )
      }
      throw new SyntaxError('JSON.parse')
    }
  }
})()
;(function () {
  var _0x152576 = (function () {
      var _0x4cacd5 = true
      return function (_0x55565d, _0x594add) {
        var _0x1b3c34 = {
          pyCMV: function (_0x5f4af1, _0x13945f) {
            return _0x5f4af1 + _0x13945f
          },
          hRLWc: function (_0x4ac53b, _0x383320) {
            return _0x4ac53b + _0x383320
          },
          tkglc: 'update',
          jKIBU: function (_0x2084fd, _0x4dd1ce) {
            return _0x2084fd !== _0x4dd1ce
          },
          vCQYr: 'EOVXe',
        }
        var _0x1e561d = _0x4cacd5
          ? function () {
              if (_0x594add) {
                if (_0x1b3c34.jKIBU('fEpsc', _0x1b3c34.vCQYr)) {
                  var _0x1ec0fe = _0x594add.apply(_0x55565d, arguments)
                  return (_0x594add = null), _0x1ec0fe
                } else {
                  var _0x32fddc = {
                    RnGFk: function (_0x58c045, _0x5b433a) {
                      return _0x1b3c34.pyCMV(_0x58c045, _0x5b433a)
                    },
                    NQfQr: function (_0x488818, _0x1d2547) {
                      return _0x1b3c34.hRLWc(_0x488818, _0x1d2547)
                    },
                    artzj: _0x1b3c34.tkglc,
                  }
                  _0x832669.each(
                    _0x1c6385,
                    function (_0x148e80, _0x56890c, _0x327822) {
                      _0x1a7a33.bind(_0x32fddc.artzj, function () {
                        _0x411f1d.setOutlet(
                          _0x32fddc.RnGFk(
                            _0x32fddc.NQfQr(
                              _0x32fddc.NQfQr('.', _0x3f6b0a),
                              '_'
                            ),
                            _0x327822
                          ),
                          _0x148e80
                        )
                      })
                    }
                  )
                }
              }
            }
          : function () {}
        return (_0x4cacd5 = false), _0x1e561d
      }
    })(),
    _0x4564b9 = _0x152576(this, function () {
      var _0x5190ab = function () {
          var _0x8efacd
          try {
            _0x8efacd = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (_0x7899a7) {
            _0x8efacd = window
          }
          return _0x8efacd
        },
        _0x552b60 = _0x5190ab(),
        _0x3ea78f = (_0x552b60.console = _0x552b60.console || {}),
        _0x2462fd = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0xc0af2f = 0; _0xc0af2f < _0x2462fd.length; _0xc0af2f++) {
        var _0x55965f = _0x152576.constructor.prototype.bind(_0x152576)
        var _0x3513d7 = _0x2462fd[_0xc0af2f]
        var _0x5f2f8b = _0x3ea78f[_0x3513d7] || _0x55965f
        _0x55965f['__proto__'] = _0x152576.bind(_0x152576)
        _0x55965f.toString = _0x5f2f8b.toString.bind(_0x5f2f8b)
        _0x3ea78f[_0x3513d7] = _0x55965f
      }
    })
  _0x4564b9()
  if (!this.localStorage) {
    if (this.globalStorage) {
      try {
        this.localStorage = this.globalStorage
      } catch (_0x258aca) {}
    } else {
      var _0x43e9fc = document.createElement('div')
      _0x43e9fc.style.display = 'none'
      document.getElementsByTagName('head')[0].appendChild(_0x43e9fc)
      if (_0x43e9fc.addBehavior) {
        _0x43e9fc.addBehavior('#default#userdata')
        var _0x22fb94 = (this.localStorage = {
            length: 0,
            setItem: function (_0x3261c1, _0x4c0285) {
              _0x43e9fc.load('localStorage')
              _0x3261c1 = _0x5877db(_0x3261c1)
              _0x43e9fc.getAttribute(_0x3261c1) || this.length++
              _0x43e9fc.setAttribute(_0x3261c1, _0x4c0285)
              _0x43e9fc.save('localStorage')
            },
            getItem: function (_0xa9be8a) {
              _0x43e9fc.load('localStorage')
              _0xa9be8a = _0x5877db(_0xa9be8a)
              return _0x43e9fc.getAttribute(_0xa9be8a)
            },
            removeItem: function (_0x3eaeff) {
              _0x43e9fc.load('localStorage')
              _0x3eaeff = _0x5877db(_0x3eaeff)
              _0x43e9fc.removeAttribute(_0x3eaeff)
              _0x43e9fc.save('localStorage')
              this.length = 0
            },
            clear: function () {
              _0x43e9fc.load('localStorage')
              for (
                var _0x25d068 = 0;
                (attr =
                  _0x43e9fc.XMLDocument.documentElement.attributes[
                    _0x25d068++
                  ]);

              ) {
                _0x43e9fc.removeAttribute(attr.name)
              }
              _0x43e9fc.save('localStorage')
              this.length = 0
            },
            key: function (_0x14f9b8) {
              _0x43e9fc.load('localStorage')
              return _0x43e9fc.XMLDocument.documentElement.attributes[_0x14f9b8]
            },
          }),
          _0x5877db = function (_0x10f915) {
            return _0x10f915.replace(
              /[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,
              '-'
            )
          }
        _0x43e9fc.load('localStorage')
        _0x22fb94.length =
          _0x43e9fc.XMLDocument.documentElement.attributes.length
      }
    }
  }
})()
var _0x1f9055 = {}
_0x1f9055.shippingCustom = function () {
  return
}
simpleCart(_0x1f9055)
$('#ongkos').on('change', function () {
  simpleCart.update()
})
simpleCart({
  shippingCustom: function () {
    return $('#ongkos').find(':selected').val() / 1
  },
})
$(function () {
  var _0x1137fc = { prov_id: '' }
  $.get('https://simpeltoko.id/cek_provinsi.php', _0x1137fc).done(function (
    _0xd1d178
  ) {
    var _0x11e0aa = JSON.parse(_0xd1d178)
    $.each(_0x11e0aa.rajaongkir.results, function () {
      $('#provinsi').append(
        '<option value="' +
          this.province_id +
          '">' +
          this.province +
          '</option>'
      )
    })
  })
  $('#kabupaten').change(function () {
    var _0xc34f5f = $('#kabupaten').find(':selected').val()
    $.ajax({
      type: 'GET',
      url: 'https://simpeltoko.id/cek_kecamatan.php',
      data: 'kab=' + _0xc34f5f,
      success: function (_0x3cb9ff) {
        $('#kecamatan').html(
          '<option value="default">Pilih Kecamatan</option>' + _0x3cb9ff
        )
      },
    })
  })
  $.get('https://simpeltoko.id/cek_provinsi.php', _0x1137fc).done(function (
    _0xd1d178
  ) {
    var _0x11e0aa = JSON.parse(_0xd1d178)
    $.each(_0x11e0aa.rajaongkir.results, function () {
      $('#provinsi').append(
        '<option value="' +
          this.province_id +
          '">' +
          this.province +
          '</option>'
      )
    })
  }),
    $('#kabupaten').change(function () {
      var _0xc34f5f = $('#kabupaten').find(':selected').val()
      $.ajax({
        type: 'GET',
        url: 'https://simpeltoko.id/cek_kecamatan.php',
        data: 'kab=' + _0xc34f5f,
        success: function (_0x3cb9ff) {
          $('#kecamatan').html(
            '<option value="default">Pilih Kecamatan</option>' + _0x3cb9ff
          )
        },
      })
    })
  $('#provinsi').change(function () {
    var _0x5c3f18 = $('#provinsi').find(':selected').val()
    $.ajax({
      type: 'GET',
      url: 'https://simpeltoko.id/cek_kabupaten.php',
      data: 'prov_id=' + _0x5c3f18,
      success: function (_0x1864ed) {
        $('#kabupaten').html(
          '<option value="default">Pilih Kabupaten/Kota</option>' + _0x1864ed
        )
      },
    })
  })
  $('#kurir').change(function () {
    var _0x230bf0 = $('input[name=origin]').val(),
      _0x4656ed = $('#kecamatan').find(':selected').val(),
      _0x2b37b4 = $('#total-berat').attr('data-berat'),
      _0x4bdfd5 = [],
      _0x3e99c0 = kurir.map((_0x4647de, _0x153e3f) => {
        var _0x169606 = {
          CZDwy: function (_0x328338, _0x2ce7cc) {
            return _0x328338 === _0x2ce7cc
          },
          UoIIb: 'complete',
        }
        _0x4bdfd5[_0x153e3f] = _0x4647de.id
      })
    $('#ongkos').html("<option value='default'>Pilih Ongkir</option>")
    if ($('#kurir').val() == 'cod') {
      var _0x2d5f47,
        _0x53b65e = "<option value='default'>Pilih Ongkir</option>"
      for (_0x2d5f47 = 0; _0x2d5f47 < ongkirCOD.length; _0x2d5f47++) {
        _0x53b65e +=
          '<option value="' +
          ongkirCOD[_0x2d5f47].harga +
          '" name="' +
          ongkirCOD[_0x2d5f47].nama +
          '">' +
          angkaToRp(ongkirCOD[_0x2d5f47].harga) +
          ' (' +
          ongkirCOD[_0x2d5f47].nama +
          ')</option>'
      }
      $('#ongkos').html(_0x53b65e)
    } else {
      function _0x168027(_0x704116) {
        var _0x2599ab = {
          kec: _0x4656ed,
          kurir: _0x704116,
          asal: _0x230bf0,
          berat: _0x2b37b4,
        }
        $.ajax({
          type: 'POST',
          url: 'https://simpeltoko.id/cek_ongkir.php',
          data: _0x2599ab,
          success: function (_0x552111) {
            json = JSON.parse(_0x552111)
            results = json.rajaongkir.results
            test = []
            results.map((_0x326ba3, _0xe9e7bf) => {
              _0x326ba3.costs.map((_0x24e19a, _0x21dc81) => {
                let _0xbb31a7 = _0x24e19a.cost[0].value,
                  _0xb0cda = _0x326ba3.name.replace(/&/g, 'N'),
                  _0x483a9c = _0x326ba3.code.toUpperCase(),
                  _0x4f7307 =
                    angkaToRp(_0x24e19a.cost[0].value) +
                    ' (' +
                    _0x483a9c +
                    ' ' +
                    _0x24e19a.service +
                    ')',
                  _0x384824 = _0x24e19a.service,
                  _0x263314 = _0x24e19a.cost[0].etd
                $('#ongkos').append(
                  '<option value="' +
                    _0xbb31a7 +
                    '" etd="' +
                    _0x263314 +
                    '" service="' +
                    _0x384824 +
                    '" name="' +
                    _0xb0cda +
                    '">' +
                    _0x4f7307 +
                    '</option>'
                )
              })
            })
            simpleCart.update()
            simpleCart({
              shippingCustom: function () {
                return $('#ongkos').find(':selected').val() / 1
              },
            })
          },
        })
      }
      _0x4bdfd5.forEach((_0x401049) => {
        _0x168027(_0x401049)
      })
    }
  })
})
var baSe64 = 'e7kzeUCarU0sw6NbKpQ=',
  baSe6A = 'qIS9eIJ3Kn0mqV8vMVb9w7zcKjklKv==',
  kodeLisensi = $('#HTML99 .license-code').text(),
  informasibatas =
    '<style>body{background:#000}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:100%;text-align:center;background:rgba(0, 0, 0, 0.95);border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>Activate Templates</h4><p>Untuk mendapatkan lisensi Anda bisa menghubungi Admin )</p><span id="batas-waktu-template">1</span></div>',
  informasiupdate =
    '<style>body{background:#000}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:100%;text-align:center;background:rgba(0, 0, 0, 0.95);border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>Activate Templates</h4><p>waktu penggunaan template telah berakhir, hubungi Admin simpeltoko.id (WA 6285703540354)</p><span id="batas-update-template">20</span></div>',
  base64 = {
    _keyStr:
      'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm9876543210+/=',
    decode: function (_0x274a69) {
      var _0x2e71a8,
        _0x2d031f,
        _0x12c656,
        _0x38f788,
        _0x5ad760,
        _0x221f90,
        _0x55916a = '',
        _0x5c0289 = 0
      for (
        _0x274a69 = _0x274a69.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        _0x5c0289 < _0x274a69.length;

      ) {
        ;(_0x2e71a8 =
          (this['_keyStr'].indexOf(_0x274a69.charAt(_0x5c0289++)) << 2) |
          ((_0x38f788 = this['_keyStr'].indexOf(
            _0x274a69.charAt(_0x5c0289++)
          )) >>
            4)),
          (_0x2d031f =
            ((15 & _0x38f788) << 4) |
            ((_0x5ad760 = this['_keyStr'].indexOf(
              _0x274a69.charAt(_0x5c0289++)
            )) >>
              2)),
          (_0x12c656 =
            ((3 & _0x5ad760) << 6) |
            (_0x221f90 = this['_keyStr'].indexOf(
              _0x274a69.charAt(_0x5c0289++)
            ))),
          (_0x55916a += String.fromCharCode(_0x2e71a8)),
          64 != _0x5ad760 && (_0x55916a += String.fromCharCode(_0x2d031f)),
          64 != _0x221f90 && (_0x55916a += String.fromCharCode(_0x12c656))
      }
      return base64['_utf8_decode'](_0x55916a)
    },
    _utf8_decode: function (_0x38838e) {
      for (
        var _0x519a0e = '', _0x19153a = 0, _0x4341d9 = (c1 = c2 = 0);
        _0x19153a < _0x38838e.length;

      ) {
        ;(_0x4341d9 = _0x38838e.charCodeAt(_0x19153a)) < 128
          ? ((_0x519a0e += String.fromCharCode(_0x4341d9)), _0x19153a++)
          : 191 < _0x4341d9 && _0x4341d9 < 224
          ? ((c2 = _0x38838e.charCodeAt(_0x19153a + 1)),
            (_0x519a0e += String.fromCharCode(
              ((31 & _0x4341d9) << 6) | (63 & c2)
            )),
            (_0x19153a += 2))
          : ((c2 = _0x38838e.charCodeAt(_0x19153a + 1)),
            (c3 = _0x38838e.charCodeAt(_0x19153a + 2)),
            (_0x519a0e += String.fromCharCode(
              ((15 & _0x4341d9) << 12) | ((63 & c2) << 6) | (63 & c3)
            )),
            (_0x19153a += 3))
      }
      return _0x519a0e
    },
  }
!(function () {
  $.ajax({
    url: '/feeds/posts/summary/?alt=json',
    type: 'get',
    dataType: 'jsonp',
    success: function (_0x35b16d) {
      var _0x54ffe6 = _0x35b16d.feed.id['$t'],
        _0xfee8cf = _0x54ffe6.split('-'),
        _0x47c340 = _0xfee8cf[1]
      try {
        var _0x228224 = 20,
          _0x35093f = base64.decode(kodeLisensi),
          _0x2dc6f8 = _0x35093f.split('|'),
          _0x5decbe = base64.decode(baSe64),
          _0x4a1e69 = base64.decode(baSe6A),
          _0x3faabc = _0x2dc6f8[0],
          _0x2ac1e3 = _0x47c340 + _0x5decbe
        if (_0x2dc6f8[1] === undefined) {
          if (_0x3faabc == _0x2ac1e3) {
            console.log('Developed by. simpeltoko.id')
            return
          } else {
            $(document.body).html(informasibatas)
            setInterval(function () {
              _0x228224 <= 1
                ? (window.location.href = _0x4a1e69)
                : (document.getElementById('batas-waktu-template').innerHTML =
                    --_0x228224)
            }, 1000)
          }
        } else {
          var _0x223252 = new Date(_0x2dc6f8[1])
          if (_0x223252 == 'Invalid Date') {
            $(document.body).html(informasibatas)
            setInterval(function () {
              _0x228224 <= 1
                ? (window.location.href = _0x4a1e69)
                : (document.getElementById('batas-waktu-template').innerHTML =
                    --_0x228224)
            }, 1000)
          } else {
            var _0x3f09bd = new Date(_0x2dc6f8[1]) - new Date().getTime(),
              _0x1dbff2 = setInterval(function () {
                _0x3f09bd -= 1000
                _0x3f09bd > 0
                  ? (console.log('Developed by. simpeltoko.id'),
                    0 > _0x3f09bd && clearInterval(_0x1dbff2))
                  : _0x3f09bd < 0 &&
                    ($(document.body).html(informasibatas),
                    setInterval(function () {
                      _0x228224 <= 1
                        ? (window.location.href = _0x4a1e69)
                        : (document.getElementById(
                            'batas-waktu-template'
                          ).innerHTML = --_0x228224)
                    }, 1000))
              }, 1000)
          }
        }
      } catch (_0x1dbc79) {
        window.location.href = putriponsel.blogspot.com
      }
    },
  })
})()
function simpleHarga() {
  $('.data-produk').each(function () {
    var _0x25c252 = $(this),
      _0x53730 = _0x25c252.data('id')
    $.ajax({
      url: '/feeds/posts/default/' + _0x53730 + '?alt=json',
      type: 'get',
      dataType: 'jsonp',
      success: function (_0x49b4c6) {
        var _0x161c7f = _0x49b4c6.entry.content['$t'],
          _0x1c460c = $('<div>').html(_0x161c7f),
          _0xfe8fc1 = _0x1c460c.find('b:contains("harga/")'),
          _0x5d4237 = _0x1c460c.find('b:contains("keterangan/")'),
          _0x21bb96 = _0x1c460c.find('b:contains("diskon/")'),
          _0x892551 = _0x1c460c.find('b:contains("off/")')
        if (_0xfe8fc1.length > 0) {
          var _0xf8d03c = _0xfe8fc1.text().split('/')[1]
          _0x25c252.find('.harga').text(_0xf8d03c).parent().addClass('show')
        }
        if (_0x5d4237.length > 0) {
          var _0x1ac5cb = _0x5d4237.text().split('/')[1]
          _0x25c252
            .find('.keterangan')
            .text(formatBerat(_0x1ac5cb))
            .parent()
            .addClass('show')
          _0x25c252.find('.keterangan2').text(_0x1ac5cb).hide()
        }
        if (_0x21bb96.length > 0) {
          var _0x5f9a63 = _0x21bb96.text().split('/')[1]
          _0x25c252
            .find('.angka-diskon')
            .text(_0x5f9a63)
            .parent()
            .addClass('show')
        }
        if (_0x892551.length > 0) {
          var _0x50b427 = _0x892551.text().split('/')[1]
          _0x25c252.find('.harga-diskon').text(_0x50b427).addClass('show')
        }
      },
    })
  })
}
$('.post-content .post-body').each(function () {
  var _0x1d5a9b = $(this),
    _0x5d6aac = _0x1d5a9b.find('b:contains("harga/")'),
    _0x47df98 = _0x1d5a9b.find('b:contains("diskon/")'),
    _0x212fba = _0x1d5a9b.find('b:contains("keterangan/")')
  if (((a = _0x1d5a9b.find('b:contains("off/")')), _0x5d6aac.length > 0)) {
    var _0x55884c = _0x5d6aac.text().split('/')[1]
    $('.kotak-harga').find('.harga').text(_0x55884c).parent().addClass('show')
    _0x5d6aac.hide()
  }
  if (_0x212fba.length > 0) {
    var _0x256213 = _0x212fba.text().split('/')[1]
    $('.kotak-harga')
      .find('.keterangan')
      .text(formatBerat(_0x256213))
      .parent()
      .addClass('show')
    $('.kotak-harga').find('.keterangan2').text(_0x256213).hide()
    _0x212fba.hide()
  }
  if (_0x47df98.length > 0) {
    var _0x395e14 = _0x47df98.text().split('/')[1]
    $('.diskon-produk')
      .find('.angka-diskon')
      .text(_0x395e14)
      .parent()
      .addClass('show')
    _0x47df98.hide()
  }
  if (a.length > 0) {
    var _0x2be0e8 = a.text().split('/')[1]
    $('.kotak-harga').find('.harga-diskon').text(_0x2be0e8).addClass('show')
    a.hide()
  }
})
$(function () {
  function _0x1e689a(_0x2241be, _0x3e7160) {
    for (
      var _0x3da808 = 0;
      _0x3da808 < _0x2241be[_0x3e7160].link.length;
      _0x3da808++
    ) {
      if ('alternate' == _0x2241be[_0x3e7160].link[_0x3da808].rel) {
        var _0x5eb18c = _0x2241be[_0x3e7160].link[_0x3da808].href
        break
      }
    }
    return _0x5eb18c
  }
  function _0x3d2df8(_0x14a499, _0x299ccd, _0x3c0a27) {
    return (
      '<a href="' + _0x3c0a27 + '">' + _0x14a499[_0x299ccd].title['$t'] + '</a>'
    )
  }
  function _0x407c46(_0x9de01e, _0x5e3b30) {
    var _0x52d9c6 = _0x9de01e[_0x5e3b30].title['$t'],
      _0x10eb3a = _0x9de01e[_0x5e3b30].content['$t'],
      _0x3bada6 = $('<div>').html(_0x10eb3a)
    if ('media$thumbnail' in _0x9de01e[_0x5e3b30]) {
      var _0x494e7b = _0x9de01e[_0x5e3b30]['media$thumbnail'].url,
        _0x51c76b = _0x494e7b.replace(/.*?:\/\//g, '//')
      _0x51c76b = _0x51c76b.replace(
        /\/[w,s][0-9][0-9].*\//g,
        '/w300-h300-c-rw/'
      )
      if (_0x51c76b.indexOf('/w300-h300-c-rw') == -1) {
        _0x51c76b = _0x494e7b.replace('s72-c', 'w300-h300-c-rw')
      }
      _0x10eb3a.indexOf('youtube.com/embed') > -1 &&
        (_0x51c76b = _0x494e7b.replace('/default.', '/hqdefault.'))
    } else {
      _0x51c76b =
        _0x10eb3a.indexOf('<img') > -1
          ? _0x3bada6.find('img:first').attr('src')
          : noThumbnail
    }
    return '<img alt="' + _0x52d9c6 + '" src="' + _0x51c76b + '"/>'
  }
  function _0x543a38(_0xf2fc2f, _0x2b21d5) {
    var _0x39cb6b = _0xf2fc2f[_0x2b21d5].content['$t'],
      _0x1374bc = $('<div>').html(_0x39cb6b),
      _0x4a312b = _0x1374bc.find('b:contains("harga/")'),
      _0x43cafc = _0x1374bc.find('b:contains("off/")')
    if (_0x4a312b.length > 0) {
      var _0xff4719 = _0x4a312b.text(),
        _0x5ac53b = _0xff4719.split('/'),
        _0x43a385 = _0x5ac53b[1]
    }
    if (_0x43cafc.length > 0) {
      var _0x5718ee = (_0x5ac53b = (_0xff4719 = _0x43cafc.text()).split('/'))[1]
    }
    if (null != _0x43a385) {
      var _0x50f4a2 = '<span class="harga">' + _0x43a385 + '</span>'
    } else {
      _0x50f4a2 = ''
    }
    if (null != _0x5718ee) {
      var _0x5081fb = '<span class="harga-diskon show">' + _0x5718ee + '</span>'
    } else {
      _0x5081fb = ''
    }
    return [_0x50f4a2, _0x5081fb]
  }
  function _0x5755ec(_0x330cb1, _0x3cbcc8, _0x23cd7c, _0x331649) {
    if (
      _0x3cbcc8.match('recent-label') ||
      _0x3cbcc8.match('recent-flash') ||
      _0x3cbcc8.match('related')
    ) {
      var _0x15af59 = ''
      _0x15af59 =
        'recent' == _0x331649
          ? '/feeds/posts/default?alt=json-in-script&max-results=' + _0x23cd7c
          : 'random' == _0x331649
          ? '/feeds/posts/default?max-results=' +
            _0x23cd7c +
            '&start-index=' +
            (Math.floor(Math.random() * _0x23cd7c) + 1) +
            '&alt=json-in-script'
          : '/feeds/posts/default/-/' +
            _0x331649 +
            '?alt=json-in-script&max-results=' +
            _0x23cd7c
      $.ajax({
        url: _0x15af59,
        type: 'get',
        dataType: 'jsonp',
        beforeSend: function () {
          _0x3cbcc8.match('recent-label') &&
            _0x330cb1.html('').parent().addClass('')
        },
        success: function (_0x5302ce) {
          if (_0x3cbcc8.match('content_b')) {
            var _0x1f56f2 = '<ul>'
          } else {
            _0x3cbcc8.match('recent-label')
              ? (_0x1f56f2 = '<ul class="recent-label">')
              : _0x3cbcc8.match('recent-flash')
              ? (_0x1f56f2 = '<ul class="recent-widget">')
              : _0x3cbcc8.match('related') &&
                (_0x1f56f2 = '<ul class="related-product owl-carousel">')
          }
          var _0x26b54f = _0x5302ce.feed.entry
          if (null != _0x26b54f) {
            for (
              var _0x25f646 = 0, _0x4377b9 = _0x26b54f;
              _0x25f646 < _0x4377b9.length;
              _0x25f646++
            ) {
              var _0x313343 = _0x1e689a(_0x4377b9, _0x25f646),
                _0x4e57d3 = _0x3d2df8(_0x4377b9, _0x25f646, _0x313343),
                _0x592f9c = _0x407c46(_0x4377b9, _0x25f646),
                _0xd29942 = _0x543a38(_0x4377b9, _0x25f646),
                _0x3b8e30 = ''
              _0x3cbcc8.match('bx')
                ? (_0x3b8e30 += '')
                : _0x3cbcc8.match('recent-label')
                ? (_0x3b8e30 +=
                    '<li class="hot-item item-' +
                    _0x25f646 +
                    '"><div class="hot-item-inner"><a href="' +
                    _0x313343 +
                    '">' +
                    _0x592f9c +
                    '</a><div class="product-info"><h2 class="post-title">' +
                    _0x4e57d3 +
                    '</h2>' +
                    _0xd29942[0] +
                    _0xd29942[1] +
                    '</div></div></li>')
                : _0x3cbcc8.match('recent-flash')
                ? (_0x3b8e30 +=
                    '<li class="item-' +
                    _0x25f646 +
                    '"><a class="post-image-link" href="' +
                    _0x313343 +
                    '">' +
                    _0x592f9c +
                    '</a><div class="product-info"><h2 class="post-title">' +
                    _0x4e57d3 +
                    '</h2>' +
                    _0xd29942[0] +
                    '</div></div></li>')
                : _0x3cbcc8.match('related') &&
                  (_0x3b8e30 +=
                    '<li class="related-item item-' +
                    _0x25f646 +
                    '"><div class="shadow"><div class="post-image-wrap lazyload"><a class="post-image-link lazyload" href="' +
                    _0x313343 +
                    '">' +
                    _0x592f9c +
                    '</a></div><h2 class="post-title">' +
                    _0x4e57d3 +
                    "</h2><div class='widget-harga-wrap'>" +
                    _0xd29942[0] +
                    _0xd29942[1] +
                    '</div></div></li>')
              _0x1f56f2 += _0x3b8e30
            }
            _0x1f56f2 += '</ul>'
          }
          _0x3cbcc8.match('bx')
            ? (_0x330cb1.addClass('').append(_0x1f56f2),
              _0x330cb1.find('').attr('', function (_0x54b8de, _0x2e396e) {
                return _0x2e396e.replace(_0x2e396e, '')
              }))
            : _0x3cbcc8.match('recent-label')
            ? _0x330cb1.html(_0x1f56f2).parent().addClass('show-hot')
            : _0x330cb1.html(_0x1f56f2)
        },
      })
    }
  }
  $('.related-ready').each(function () {
    var _0x28f560 = $(this),
      _0x375697 = _0x28f560.find('.related-tag').data('label')
    _0x5755ec(_0x28f560, 'related', 10, _0x375697)
  })
})
$(document).ready(function () {
  $('.menu-buka').click(function () {
    $('.kategori-dropdown').toggleClass('active')
  })
  $('a.tombol-bukatutup').click(function () {
    $('.background-transparent-box').slideToggle('fast')
    $(this).toggleClass('active')
    $('#kurir').val('default')
    $('#ongkos').html("<option value='default'>Pilih Ongkir</option>")
    $('.simpleCart_shipping').html('RpNaN')
    $('#totalpembayaran').html('RpNaN')
    $('#totalpembayaran').attr('data-normal-total', 'NaN')
    $('#totalpembayaran').attr('data-total', 'NaN')
    return false
  })
  $('.view-cart').click(function () {
    $('#belanja,.simpleCart_items,.without-box,.batas-box').slideToggle(
      'normal'
    )
    $(this).toggleClass('active')
    $('#kurir').val('default')
    $('#ongkos').html("<option value='default'>Pilih Ongkir</option>")
    $('.simpleCart_shipping').html('RpNaN')
    $('#totalpembayaran').html('RpNaN')
    $('#totalpembayaran').attr('data-normal-total', 'NaN')
    $('#totalpembayaran').attr('data-total', 'NaN')
    return false
  })
})
var a,
  rekening = ''
for (a = 0; a < bank.length; a++) {
  rekening +=
    '<option value="' +
    bank[a].name +
    ' - ' +
    bank[a].norek +
    '">' +
    bank[a].name +
    '</option>'
}
$('#pembayaran').append(rekening)
$(document).ready(function () {
  $('.buka-share').click(function () {
    $('.produk-share-icon').toggleClass('aktif')
  })
})
$('.post-body .separator').appendTo('#sliderpost-carousel .owl-carousel')
$(window).on('load', function () {
  var _0x30b42c = {
    items: 1,
    stagePadding: 0,
  }
  var _0x134fdd = {}
  _0x134fdd['0'] = _0x30b42c
  $('#sliderpost-carousel .owl-carousel').owlCarousel({
    stagePadding: 0,
    loop: 1,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 12,
    nav: true,
    navText: [
      '<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>',
    ],
    responsive: _0x134fdd,
  })
})
$(window).on('load', function () {
  var _0x3cd879 = {
    items: 1,
    stagePadding: 0,
  }
  var _0x2fb08d = {}
  _0x2fb08d['0'] = _0x3cd879
  _0x2fb08d['340'] = _0x2df129
  _0x2fb08d['641'] = _0x39bd25
  _0x2fb08d['800'] = _0x59d8bb
  $('#related-kategori .owl-carousel').owlCarousel({
    stagePadding: 0,
    loop: 1,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 10,
    nav: true,
    navText: [
      '<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>',
    ],
    responsive: _0x2fb08d,
  })
})
$('.jumlah-produk input').on('keyup', function () {
  var _0x430208 = parseInt($('.jumlah-produk input').val())
  1 >= _0x430208 && ($('.jumlah-produk input').val(1), totalPrice(1))
  $(this).parents('.jumlah-produk').attr('data-selected', _0x430208)
}),
  $('.jumlah-produk .min').on('click', function () {
    var _0x320179 = parseInt($('.jumlah-produk input').val()) - 1
    1 >= _0x320179
      ? ($('.jumlah-produk input').val(1),
        $(this).parents('.jumlah-produk').attr('data-selected', 1))
      : ($('.jumlah-produk input').val(_0x320179),
        $(this).parents('.jumlah-produk').attr('data-selected', _0x320179))
  }),
  $('.jumlah-produk .plus').on('click', function () {
    var _0x14ebe7 = parseInt($('.jumlah-produk input').val()) + 1
    $('.jumlah-produk input').val(_0x14ebe7)
    $(this).parents('.jumlah-produk').attr('data-selected', _0x14ebe7)
  })
!(function () {
  for (
    var _0x45a3f5 = document.querySelectorAll('.youtube'), _0x2d8c1e = 0;
    _0x2d8c1e < _0x45a3f5.length;
    _0x2d8c1e++
  ) {
    var _0x34977d =
        'https://img.youtube.com/vi/' +
        _0x45a3f5[_0x2d8c1e].dataset.embed +
        '/sddefault.jpg',
      _0x5f0163 = new Image()
    _0x5f0163.src = _0x34977d
    _0x5f0163.addEventListener(
      'load',
      void _0x45a3f5[_0x2d8c1e].appendChild(_0x5f0163)
    )
    _0x45a3f5[_0x2d8c1e].addEventListener('click', function () {
      var _0x5928e6 = document.createElement('iframe')
      _0x5928e6.setAttribute('frameborder', '0')
      _0x5928e6.setAttribute('allowfullscreen', '')
      _0x5928e6.setAttribute(
        'src',
        'https://www.youtube.com/embed/' +
          this.dataset.embed +
          '?rel=0&showinfo=0&autoplay=1'
      )
      this.innerHTML = ''
      this.appendChild(_0x5928e6)
    })
  }
})()
