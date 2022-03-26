function isFuture(dateParameter) {
  return new Date().getTime() < dateParameter.getTime();
}

function isSevenDayOut(dateParameter) {
  var today = new Date();
  return (
    dateParameter.getDate() === today.getDate() - 7 &&
    dateParameter.getMonth() === today.getMonth() &&
    dateParameter.getFullYear() === today.getFullYear()
  );
}

function isMonthOut(dateParameter) {
  var today = new Date();
  return (
    dateParameter.getDate() === today.getDate() &&
    dateParameter.getMonth() === today.getMonth() - 1 &&
    dateParameter.getFullYear() === today.getFullYear()
  );
}

function isYearOut(dateParameter) {
  var today = new Date();
  return (
    dateParameter.getDate() === today.getDate() &&
    dateParameter.getMonth() === today.getMonth() &&
    dateParameter.getFullYear() === today.getFullYear() - 1
  );
}

function isToday(dateParameter) {
  var today = new Date();
  const isToday =
    dateParameter.getDate() === today.getDate() &&
    dateParameter.getMonth() === today.getMonth() &&
    dateParameter.getFullYear() === today.getFullYear();
  console.log(isToday);
  return isToday;
}

const getPDK = () => {
  return (pdkIndex[hemicalIndex] * 1.5) / 10;
};

function reducerHemical(accum, t) {
  return { [t.hex_id]: t[hemicalIndex] || 0, ...accum };
}

function render() {
  switch (timeIndex) {
    case '0': {
      // const new_data = h3DataHimical.filter(v => isYearOut(new Date(v.data_time))).reduce(reducerHemical, {})

      renderHexes(h3DataHimical);
      break;
    }
    case '1': {
      // const new_data = h3DataHimical.filter(v => isMonthOut(new Date(v.data_time))).reduce(reducerHemical, {})

      renderHexes(h3DataHimical);
      break;
    }
    case '2': {
      // const new_data = h3DataHimical.filter(v => isSevenDayOut(new Date(v.data_time))).reduce(reducerHemical, {})

      renderHexes(h3DataHimical);
      break;
    }
    case '3': {
      // const new_data = h3DataHimical.reduce(reducerHemical, {})

      renderHexes(h3DataHimical);
      break;
    }
    case '4':
    case '5':
    case '6': {
      // const new_data = h3DataHimical.filter(v => isFuture(new Date(v.data_time))).reduce(reducerHemical, {})

      renderHexes(h3DataHimical);
      break;
    }
    default:
      break;
  }
}

var memoRender = () => memoize(render, `${hemicalIndex}-${timeIndex}`);

var memoize = function (func, resolver) {
  const cache = new Map();

  return (...args) => {
    const key = resolver ? resolver.apply(this, args) : args[0];

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
};
