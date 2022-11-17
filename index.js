$(function() {
    $.widget("custom.selectmenu", $.ui.selectmenu, {
      _renderItem: function(ul, item) {
  
        console.log(item);
        let li = $("<li>"),
          wrapper = $("<div>");
  
        if (item.disabled) {
          li.addClass("ui-state-disabled");
        }
  
        $("<span>", {
            style: "background-color: #" + item.value,
            "class": "ui-color-chip"
          })
          .appendTo(wrapper);
        wrapper.append(item.label);
  
        return li.append(wrapper).appendTo(ul);
      }
    });
  
    $("#DropDownID")
      .selectmenu()
      .selectmenu("menuWidget")
      .addClass("ui-menu-icons customicons");
  
    let Color = {
      Data: [
  
        {
          RgbValue: 'ff0000',
          ColorName: 'Red'
        },
        {
          RgbValue: '008000',
          ColorName: 'Green'
        },
        {
            RgbValue: 'FFA500',
            ColorName: 'Orange'
          },
          {
            RgbValue: '0000FF',
            ColorName: 'Blue'
          },
          {
            RgbValue: '800080',
            ColorName: 'Purple'
          },
          {
            RgbValue: 'FF1493',
            ColorName: 'Deeppink'
          },
          {
            RgbValue: '000000',
            ColorName: 'Lightslategray'
          },
          {
            RgbValue: '008000',
            ColorName: 'Black'
          },
          {
            RgbValue: '8B4513',
            ColorName: 'Saddlebrown'
          },
          {
            RgbValue: '8A2BE2',
            ColorName: 'Blueviolet'
          },
          {
            RgbValue: '4B0082',
            ColorName: 'Indigo'
          },
          {
            RgbValue: 'FF69B4',
            ColorName: 'Hotpink'
          },
          {
            RgbValue: 'FFFFFF',
            ColorName: 'White'
          },

      ]
    };
  
    for (let i = 0; i < Color.Data.length; i++) {
      $("#DropDownID").append($(`<option></option>`).val(Color.Data[i].RgbValue).html(`<span></span>`+Color.Data[i].ColorName)		);
    }
  });