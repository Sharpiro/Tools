const apiKey = 'AsQNbUN-f9zXBP5hhUqc4A6P5s3y7cVV7bXjcEcnwA_NUCtFmtkHC86ia7Q2LxUD'
const sycaCoords = { latitude: 35.2089113, longitude: -80.8624413 }
const workCoords = { latitude: 35.3123464, longitude: -80.7747997 }

function GetMap() {
    const map = new Microsoft.Maps.Map('#myMap', {
        credentials: apiKey
    });

    // const url = `https://dev.virtualearth.net/REST/v1/Routes/Isochrones?waypoint=35.2089113,-80.8624413&maxTime=20&timeUnit=Minutes&travelMode=driving&key=${apiKey}`
    // const workUrl = "https://dev.virtualearth.net/REST/v1/Routes/Isochrones?waypoint=35.3123464,-80.7747997&maxTime=20&timeUnit=Minutes&travelMode=driving&key=" + apiKey


    // getRawCoords(workCoords.latitude, workCoords.longitude, 15)
    //     .then(res => {
    //         console.log(JSON.stringify(res));
    //         const polygon = getPolygon(res, "orange")
    //         map.entities.push(polygon);
    //     }, err => console.error(err))

    const polygons = [
        // getPolygon(twentyMinFromSyca, 'rgba(0, 255, 0, 0.5)'),
        // getPolygon(twentyMinFromWork, 'rgba(0, 0, 255, 0.5)')
        // getPolygon(fifteenMinFromSyca),
        getPolygon(fifteenMinFromWork),
        getPolygon(twentyMinFromSyca)
    ]

    for (const polygon of polygons) {
        map.entities.push(polygon);
    }
}

function getPolygon(rawCoords, fillColor) {
    const locationData = getLocationData(rawCoords)
    return new Microsoft.Maps.Polygon(locationData, {
        fillColor: fillColor,
        strokeColor: 'red',
        strokeThickness: 2
    });
}

function getLocationData(rawCoords) {
    return rawCoords.map(c => new Microsoft.Maps.Location(c[0], c[1]))
}

function getRawCoords(latitde, longitude, driveTime) {
    const url = `https://dev.virtualearth.net/REST/v1/Routes/Isochrones?waypoint=${latitde},${longitude}&maxTime=${driveTime}&timeUnit=Minutes&travelMode=driving&key=${apiKey}`
    return new Promise((resolve, rej) => {
        fetch(url).then(res => {
            res.json().then(json => {
                const rawCoords = json.resourceSets[0].resources[0].polygons[0].coordinates[0]
                resolve(rawCoords)
            }, err => console.error(err))
        }, err => console.error(err))
    })
}

const twentyMinFromWork = [[35.258375, -81.012209], [35.25858, -81.007767], [35.25857, -81.003324], [35.25843, -80.998882], [35.258, -80.99444], [35.25727, -80.989997], [35.25738, -80.985555], [35.26018, -80.981113], [35.35339, -80.976671], [35.35147, -80.972228], [35.34831, -80.967786], [35.346547, -80.963344], [35.34428, -80.958902], [35.33562, -80.954459], [35.335895, -80.950017], [35.33651, -80.945575], [35.34583, -80.941132], [35.34356, -80.93669], [35.3355, -80.932248], [35.34212, -80.927806], [35.37987, -80.923363], [35.38647, -80.918921], [35.38928, -80.914479], [35.41447, -80.910036], [35.414122, -80.905594], [35.41447, -80.905594], [35.416948, -80.898005], [35.420565, -80.89753], [35.424181, -80.88488], [35.427798, -80.88294], [35.431414, -80.88125], [35.435031, -80.89265], [35.438647, -80.90334], [35.442263, -80.90094], [35.44664, -80.901152], [35.44796, -80.89671], [35.450264, -80.892267], [35.453113, -80.87343], [35.456729, -80.87515], [35.460346, -80.87605], [35.463962, -80.87626], [35.467579, -80.87619], [35.471195, -80.87564], [35.474811, -80.87541], [35.478428, -80.89004], [35.48246, -80.887825], [35.48391, -80.883383], [35.49103, -80.878941], [35.491506, -80.874498], [35.49955, -80.870056], [35.528948, -80.865614], [35.52648, -80.861171], [35.518209, -80.864298], [35.514592, -80.86501], [35.510976, -80.86528], [35.50736, -80.86554], [35.500127, -80.86401], [35.44873, -80.856729], [35.44878, -80.852287], [35.45178, -80.847845], [35.4593, -80.843402], [35.459822, -80.83896], [35.458235, -80.834518], [35.456647, -80.830075], [35.45506, -80.825633], [35.45104, -80.821191], [35.452839, -80.816749], [35.454142, -80.812306], [35.44173, -80.807864], [35.44265, -80.803422], [35.44924, -80.79898], [35.450381, -80.794537], [35.43382, -80.790095], [35.447288, -80.785653], [35.44516, -80.78121], [35.42321, -80.776768], [35.439, -80.772326], [35.44119, -80.767884], [35.44207, -80.763441], [35.44385, -80.758999], [35.442236, -80.754557], [35.449968, -80.750115], [35.44935, -80.745672], [35.442255, -80.74123], [35.46269, -80.736788], [35.46623, -80.732345], [35.46881, -80.727903], [35.44926, -80.723461], [35.45, -80.719019], [35.44967, -80.714576], [35.43821, -80.710134], [35.43771, -80.705692], [35.43766, -80.701249], [35.44779, -80.696807], [35.45008, -80.692365], [35.46546, -80.687923], [35.4634, -80.68348], [35.465704, -80.679038], [35.47654, -80.674596], [35.476039, -80.670154], [35.471537, -80.665711], [35.471553, -80.661269], [35.4616, -80.656827], [35.44861, -80.652384], [35.44987, -80.647942], [35.44857, -80.6435], [35.45383, -80.639058], [35.44895, -80.634615], [35.44569, -80.630173], [35.445347, -80.625731], [35.45187, -80.621288], [35.45814, -80.616846], [35.45985, -80.612404], [35.4636, -80.607962], [35.45733, -80.603519], [35.47352, -80.599077], [35.47285, -80.594635], [35.470506, -80.590193], [35.47006, -80.58575], [35.47751, -80.581308], [35.482685, -80.576866], [35.49018, -80.572423], [35.49368, -80.567981], [35.489745, -80.567981], [35.482922, -80.572423], [35.477064, -80.576866], [35.46018, -80.581308], [35.456326, -80.58575], [35.451188, -80.590193], [35.44841, -80.594635], [35.44588, -80.60284], [35.424181, -80.61462], [35.420565, -80.615016], [35.416948, -80.60963], [35.413332, -80.609304], [35.409715, -80.610794], [35.406099, -80.60963], [35.402483, -80.60913], [35.398866, -80.60809], [35.39525, -80.606895], [35.391633, -80.60686], [35.337386, -80.61999], [35.33377, -80.62256], [35.308455, -80.617177], [35.30385, -80.599077], [35.30199, -80.603519], [35.29736, -80.607962], [35.29844, -80.612404], [35.29736, -80.612404], [35.293989, -80.61916], [35.290373, -80.62381], [35.286756, -80.62395], [35.28314, -80.62334], [35.279523, -80.6345], [35.275907, -80.63618], [35.27229, -80.63756], [35.268674, -80.63905], [35.265057, -80.63652], [35.261441, -80.63654], [35.257825, -80.63781], [35.254208, -80.635069], [35.250592, -80.63377], [35.246975, -80.63944], [35.243359, -80.64274], [35.239742, -80.630696], [35.236126, -80.631608], [35.232509, -80.633287], [35.228893, -80.62915], [35.223798, -80.616846], [35.22103, -80.621288], [35.214427, -80.629672], [35.210811, -80.629653], [35.207194, -80.631153], [35.203578, -80.63164], [35.199961, -80.629968], [35.196345, -80.62909], [35.192729, -80.629085], [35.189112, -80.629107], [35.18362, -80.625731], [35.16603, -80.630173], [35.17977, -80.634615], [35.1894, -80.639058], [35.18285, -80.6435], [35.21459, -80.647942], [35.217035, -80.652384], [35.2108, -80.656827], [35.208695, -80.661269], [35.20593, -80.665711], [35.20548, -80.670154], [35.208485, -80.674596], [35.209376, -80.679038], [35.210345, -80.68348], [35.21184, -80.687923], [35.214238, -80.692365], [35.21467, -80.696807], [35.21637, -80.701249], [35.20786, -80.705692], [35.19548, -80.710134], [35.195625, -80.714576], [35.19537, -80.719019], [35.19191, -80.723461], [35.18749, -80.727903], [35.1999, -80.732345], [35.19963, -80.736788], [35.19642, -80.74123], [35.199235, -80.745672], [35.20177, -80.750115], [35.20104, -80.754557], [35.198105, -80.758999], [35.19609, -80.763441], [35.196503, -80.767884], [35.19791, -80.772326], [35.20031, -80.776768], [35.192821, -80.78121], [35.19255, -80.785653], [35.19226, -80.790095], [35.190042, -80.794537], [35.18927, -80.79898], [35.20128, -80.803422], [35.20035, -80.807864], [35.20015, -80.812306], [35.20249, -80.816749], [35.20058, -80.821191], [35.19844, -80.825633], [35.20043, -80.830075], [35.19653, -80.834518], [35.20249, -80.83896], [35.200895, -80.843402], [35.19964, -80.847845], [35.20249, -80.852287], [35.20253, -80.856729], [35.201753, -80.861171], [35.19119, -80.865614], [35.18683, -80.870056], [35.17346, -80.874498], [35.16515, -80.878941], [35.16301, -80.883383], [35.1593, -80.887825], [35.15026, -80.892267], [35.14625, -80.89671], [35.141685, -80.901152], [35.14083, -80.905594], [35.187705, -80.910036], [35.18836, -80.914479], [35.18362, -80.918921], [35.185625, -80.923363], [35.18953, -80.927806], [35.1937, -80.932248], [35.19297, -80.93669], [35.19711, -80.941132], [35.19668, -80.945575], [35.19711, -80.950017], [35.199961, -80.93906], [35.203578, -80.93134], [35.207194, -80.93171], [35.210811, -80.9332], [35.214427, -80.9336], [35.218044, -80.93247], [35.22166, -80.92974], [35.227717, -80.950017], [35.22678, -80.954459], [35.226025, -80.958902], [35.2285, -80.963344], [35.23772, -80.967786], [35.22351, -80.972228], [35.25007, -80.976671], [35.25166, -80.981113], [35.24533, -80.985555], [35.25147, -80.989997], [35.25657, -80.99444], [35.25734, -80.998882], [35.25781, -81.003324], [35.25777, -81.007767], [35.2576, -81.012209], [35.258375, -81.012209]]
const twentyMinFromSyca = [[35.264566, -81.066997], [35.264522, -81.062592], [35.264455, -81.058187], [35.26347, -81.053782], [35.261377, -81.049376], [35.26381, -81.044971], [35.25732, -81.040566], [35.257235, -81.03616], [35.25745, -81.031755], [35.27598, -81.02735], [35.27442, -81.022945], [35.26487, -81.018539], [35.258278, -81.014134], [35.25851, -81.009729], [35.261247, -81.005324], [35.26156, -81.000918], [35.27598, -81.000918], [35.375866, -80.996513], [35.37175, -80.992108], [35.36574, -80.987702], [35.36147, -80.983297], [35.357318, -80.978892], [35.35835, -80.974487], [35.34948, -80.970081], [35.34548, -80.965676], [35.345438, -80.961271], [35.34428, -80.956865], [35.33562, -80.95246], [35.34523, -80.948055], [35.345479, -80.94365], [35.348621, -80.939244], [35.348997, -80.934839], [35.346983, -80.930434], [35.34535, -80.926029], [35.34025, -80.921623], [35.34247, -80.917218], [35.349101, -80.912813], [35.35782, -80.908407], [35.37474, -80.904002], [35.370183, -80.899597], [35.36292, -80.895192], [35.36258, -80.890786], [35.375866, -80.890786], [35.377701, -80.885498], [35.381315, -80.885435], [35.384929, -80.88522], [35.388543, -80.859675], [35.392157, -80.87714], [35.395771, -80.87706], [35.399385, -80.876802], [35.402999, -80.88339], [35.40719, -80.886381], [35.41281, -80.881976], [35.442753, -80.878242], [35.460823, -80.8755], [35.464437, -80.8758], [35.46684, -80.877571], [35.47933, -80.873165], [35.453161, -80.86876], [35.44297, -80.864355], [35.44301, -80.859949], [35.44277, -80.855544], [35.441595, -80.851139], [35.441485, -80.846734], [35.43072, -80.842328], [35.41561, -80.837923], [35.416436, -80.833518], [35.40355, -80.829113], [35.403179, -80.824707], [35.40287, -80.820302], [35.3739, -80.815897], [35.38761, -80.811491], [35.38434, -80.807086], [35.39428, -80.802681], [35.37956, -80.798276], [35.38319, -80.79387], [35.38719, -80.789465], [35.387702, -80.78506], [35.39126, -80.780655], [35.380737, -80.776249], [35.38074, -80.771844], [35.379086, -80.767439], [35.37776, -80.763033], [35.37505, -80.758628], [35.371616, -80.754223], [35.370917, -80.749818], [35.37094, -80.745412], [35.366681, -80.741007], [35.37247, -80.736602], [35.37717, -80.732196], [35.381137, -80.727791], [35.380766, -80.723386], [35.37572, -80.718981], [35.37331, -80.714575], [35.37713, -80.71017], [35.404129, -80.705765], [35.409028, -80.70136], [35.40733, -80.696954], [35.40889, -80.692549], [35.41027, -80.688144], [35.41102, -80.683738], [35.366681, -80.679333], [35.363245, -80.69113], [35.359631, -80.691325], [35.356018, -80.688861], [35.352404, -80.68788], [35.345176, -80.69384], [35.341562, -80.698644], [35.337948, -80.70313], [35.334334, -80.71166], [35.33072, -80.71496], [35.327106, -80.712175], [35.323492, -80.71162], [35.319878, -80.71152], [35.316264, -80.687409], [35.31265, -80.69813], [35.309036, -80.69752], [35.305422, -80.68757], [35.293525, -80.679333], [35.287352, -80.71622], [35.283738, -80.71209], [35.280124, -80.722075], [35.27651, -80.7151], [35.272896, -80.72031], [35.269282, -80.72537], [35.265668, -80.724841], [35.262054, -80.731645], [35.25844, -80.734509], [35.254826, -80.73604], [35.251212, -80.73453], [35.247598, -80.73393], [35.243984, -80.73396], [35.24037, -80.7215], [35.236756, -80.716784], [35.233142, -80.71559], [35.229528, -80.711056], [35.225914, -80.706735], [35.2223, -80.70537], [35.218686, -80.686459], [35.215072, -80.68653], [35.209966, -80.674928], [35.209017, -80.670523], [35.20802, -80.670523], [35.20756, -80.674928], [35.209456, -80.679333], [35.18057, -80.683738], [35.183977, -80.688144], [35.18148, -80.692549], [35.18057, -80.692549], [35.11848, -80.696954], [35.11924, -80.70136], [35.12356, -80.705765], [35.12696, -80.71017], [35.12949, -80.714575], [35.12097, -80.718981], [35.12193, -80.723386], [35.1252, -80.727791], [35.124841, -80.732196], [35.13085, -80.736602], [35.13581, -80.741007], [35.13661, -80.745412], [35.13702, -80.749818], [35.11848, -80.749818], [35.11388, -80.77288], [35.110266, -80.777364], [35.106652, -80.7767], [35.103039, -80.778825], [35.099425, -80.83125], [35.095811, -80.83699], [35.092197, -80.83734], [35.088583, -80.8355], [35.084969, -80.818436], [35.081355, -80.8223], [35.077741, -80.826979], [35.074127, -80.81701], [35.070513, -80.81697], [35.06274, -80.754223], [35.0613, -80.758628], [35.059895, -80.763033], [35.05957, -80.767439], [35.05798, -80.771844], [35.05979, -80.776249], [35.06046, -80.780655], [35.061097, -80.78506], [35.061456, -80.789465], [35.0621, -80.79387], [35.0625, -80.798276], [35.05904, -80.802681], [35.046387, -80.807086], [35.04825, -80.811491], [35.05206, -80.815897], [35.05545, -80.820302], [35.05617, -80.824707], [35.048728, -80.829113], [35.04669, -80.833518], [35.0383, -80.837923], [35.03087, -80.842328], [35.03254, -80.846734], [35.02511, -80.851139], [35.030694, -80.855544], [35.03993, -80.859949], [35.04005, -80.864355], [35.047385, -80.86876], [35.052828, -80.873165], [35.05318, -80.877571], [35.05996, -80.881976], [35.06362, -80.886381], [35.06219, -80.890786], [35.078185, -80.895192], [35.07756, -80.899597], [35.079219, -80.904002], [35.06438, -80.908407], [35.03448, -80.912813], [35.03939, -80.917218], [35.043178, -80.921623], [35.03694, -80.926029], [35.029495, -80.930434], [35.02808, -80.934839], [35.04389, -80.939244], [35.03735, -80.94365], [35.0126, -80.948055], [35.01368, -80.95246], [35.014749, -80.956865], [35.00675, -80.961271], [35.01461, -80.965676], [35.00429, -80.970081], [34.99664, -80.974487], [34.991154, -80.978892], [34.98429, -80.983297], [34.9839, -80.987702], [35.04933, -80.992108], [35.05406, -80.996513], [35.05626, -81.000918], [35.059671, -81.00194], [35.063285, -80.99757], [35.066899, -80.994717], [35.070513, -80.99823], [35.074127, -80.989875], [35.077741, -80.98029], [35.081355, -80.98818], [35.084969, -80.99486], [35.088583, -80.99295], [35.092197, -80.992623], [35.095811, -81.00296], [35.099425, -81.000335], [35.103039, -80.99807], [35.106652, -80.9936], [35.110266, -80.988328], [35.11388, -80.987702], [35.117494, -80.9939], [35.121108, -81.002289], [35.124722, -80.99696], [35.128336, -80.988375], [35.13195, -80.985975], [35.14362, -81.005324], [35.13567, -81.009729], [35.14362, -81.014134], [35.146406, -81.006855], [35.15002, -81.00436], [35.153634, -81.00217], [35.157248, -80.99853], [35.160862, -81.00127], [35.164476, -81.00218], [35.16809, -81.00188], [35.171704, -80.999745], [35.175318, -80.99574], [35.178932, -80.999], [35.182546, -80.99761], [35.18616, -80.991115], [35.189774, -80.98793], [35.193388, -80.984806], [35.197002, -80.99659], [35.200616, -80.9946], [35.20423, -80.97932], [35.207844, -80.98335], [35.211458, -80.98659], [35.215072, -80.99078], [35.218686, -80.98524], [35.2223, -80.98711], [35.225914, -80.985565], [35.229528, -81.00148], [35.233142, -80.99922], [35.236756, -81.00211], [35.24152, -81.014134], [35.24043, -81.018539], [35.2449, -81.022945], [35.25012, -81.02735], [35.25155, -81.031755], [35.25635, -81.03616], [35.25464, -81.040566], [35.25278, -81.044971], [35.25568, -81.049376], [35.260566, -81.053782], [35.26275, -81.058187], [35.263851, -81.062592], [35.263915, -81.066997], [35.264566, -81.066997]]
const fifteenMinFromSyca = [[35.195785, -80.982327], [35.25423, -80.979002], [35.253513, -80.975676], [35.251626, -80.97235], [35.25536, -80.969025], [35.25443, -80.965699], [35.24782, -80.962373], [35.24631, -80.959048], [35.24499, -80.955722], [35.24382, -80.952396], [35.24262, -80.949071], [35.250027, -80.945745], [35.25536, -80.945745], [35.259203, -80.93251], [35.261913, -80.9349], [35.264623, -80.938452], [35.267333, -80.93827], [35.270042, -80.9393], [35.272752, -80.939113], [35.27623, -80.942419], [35.32091, -80.939094], [35.31911, -80.935768], [35.31825, -80.932443], [35.319187, -80.929117], [35.320338, -80.925791], [35.321512, -80.922466], [35.322686, -80.91914], [35.311764, -80.915814], [35.30361, -80.912489], [35.30362, -80.909163], [35.30544, -80.905837], [35.319179, -80.902512], [35.31375, -80.899186], [35.3079, -80.895861], [35.306118, -80.892535], [35.30432, -80.889209], [35.318215, -80.885884], [35.334434, -80.882558], [35.333303, -80.879232], [35.33584, -80.875907], [35.336545, -80.872581], [35.33789, -80.869255], [35.35164, -80.86593], [35.35172, -80.862604], [35.35949, -80.859278], [35.39763, -80.855953], [35.39641, -80.852627], [35.39066, -80.849302], [35.37747, -80.845976], [35.37199, -80.84265], [35.36644, -80.839325], [35.36424, -80.835999], [35.36521, -80.832673], [35.367135, -80.829348], [35.36621, -80.826022], [35.36628, -80.822696], [35.36649, -80.819371], [35.36668, -80.816045], [35.36692, -80.812719], [35.36734, -80.809394], [35.36789, -80.806068], [35.369486, -80.802743], [35.369273, -80.799417], [35.36906, -80.796091], [35.36424, -80.792766], [35.362177, -80.82463], [35.359467, -80.83605], [35.356757, -80.833514], [35.354048, -80.83138], [35.351338, -80.832955], [35.348628, -80.83316], [35.345918, -80.823813], [35.343208, -80.82371], [35.29635, -80.792766], [35.29761, -80.78944], [35.29479, -80.786114], [35.29507, -80.782789], [35.29989, -80.779463], [35.3024, -80.776137], [35.304012, -80.772812], [35.292719, -80.769486], [35.31463, -80.766161], [35.3146, -80.762835], [35.31336, -80.759509], [35.31637, -80.756184], [35.320762, -80.752858], [35.32428, -80.749532], [35.33061, -80.746207], [35.33971, -80.742881], [35.34053, -80.739555], [35.292719, -80.73623], [35.289011, -80.74746], [35.286302, -80.75379], [35.283592, -80.75122], [35.280882, -80.75641], [35.278172, -80.75735], [35.275462, -80.7592], [35.272752, -80.76035], [35.270042, -80.76408], [35.267333, -80.76772], [35.264623, -80.768888], [35.261913, -80.77345], [35.259203, -80.774253], [35.256493, -80.77406], [35.253783, -80.772943], [35.251074, -80.773281], [35.248364, -80.77278], [35.245654, -80.77854], [35.242944, -80.77496], [35.240234, -80.77516], [35.237524, -80.7696], [35.234815, -80.76313], [35.232105, -80.7682], [35.229395, -80.77062], [35.226685, -80.769825], [35.223975, -80.74761], [35.221265, -80.74859], [35.218555, -80.752055], [35.215846, -80.74846], [35.213136, -80.741945], [35.210426, -80.74182], [35.20877, -80.73623], [35.20741, -80.732904], [35.20638, -80.729578], [35.2029, -80.726253], [35.19491, -80.726253], [35.20001, -80.729578], [35.1999, -80.732904], [35.19491, -80.732904], [35.158073, -80.73623], [35.16081, -80.739555], [35.16298, -80.742881], [35.168464, -80.746207], [35.1676, -80.749532], [35.17277, -80.752858], [35.16917, -80.756184], [35.17117, -80.759509], [35.17224, -80.762835], [35.17386, -80.766161], [35.16913, -80.769486], [35.172392, -80.772812], [35.175455, -80.776137], [35.17429, -80.779463], [35.17417, -80.782789], [35.15905, -80.786114], [35.15754, -80.78944], [35.149605, -80.792766], [35.14948, -80.796091], [35.14986, -80.799417], [35.15786, -80.802743], [35.15708, -80.806068], [35.15595, -80.809394], [35.15687, -80.812719], [35.156345, -80.816045], [35.14614, -80.819371], [35.1447, -80.822696], [35.14507, -80.826022], [35.14362, -80.829348], [35.141948, -80.832673], [35.14103, -80.835999], [35.14733, -80.839325], [35.13929, -80.84265], [35.136548, -80.845976], [35.13091, -80.849302], [35.1285, -80.852627], [35.12733, -80.855953], [35.127291, -80.859278], [35.06608, -80.862604], [35.065308, -80.86593], [35.07037, -80.869255], [35.07423, -80.872581], [35.08625, -80.875907], [35.085147, -80.879232], [35.08464, -80.882558], [35.08464, -80.885884], [35.094796, -80.889209], [35.09639, -80.892535], [35.102614, -80.895861], [35.104782, -80.899186], [35.104595, -80.902512], [35.1011, -80.905837], [35.09997, -80.909163], [35.10739, -80.912489], [35.09869, -80.915814], [35.08906, -80.91914], [35.09003, -80.925791], [35.081379, -80.929117], [35.081188, -80.932443], [35.07681, -80.935768], [35.081888, -80.939094], [35.078173, -80.942419], [35.07316, -80.945745], [35.06883, -80.949071], [35.06453, -80.952396], [35.05871, -80.955722], [35.055169, -80.959048], [35.152136, -80.962373], [35.152798, -80.965699], [35.153457, -80.969025], [35.17161, -80.97235], [35.18749, -80.975676], [35.18291, -80.979002], [35.17936, -80.982327], [35.195785, -80.982327]]
const fifteenMinFromWork = [[35.327689, -80.930979], [35.32887, -80.927638], [35.329685, -80.924296], [35.330684, -80.920954], [35.331682, -80.917613], [35.33318, -80.914271], [35.3362, -80.91093], [35.339325, -80.907588], [35.34042, -80.904246], [35.34058, -80.900905], [35.34049, -80.897563], [35.340203, -80.894222], [35.346379, -80.89088], [35.34868, -80.887539], [35.355079, -80.884197], [35.37903, -80.880855], [35.37856, -80.877514], [35.38205, -80.874172], [35.38122, -80.870831], [35.38205, -80.870831], [35.43783, -80.867489], [35.4281, -80.864147], [35.42219, -80.860806], [35.417623, -80.857464], [35.4167, -80.854123], [35.41308, -80.850781], [35.41099, -80.847439], [35.404677, -80.844098], [35.40794, -80.840756], [35.40498, -80.837415], [35.403615, -80.834073], [35.40244, -80.830731], [35.4, -80.82739], [35.378085, -80.824048], [35.37982, -80.820707], [35.389609, -80.817365], [35.38761, -80.814024], [35.38576, -80.810682], [35.39822, -80.80734], [35.41382, -80.803999], [35.40749, -80.800657], [35.405, -80.797316], [35.4038, -80.793974], [35.40124, -80.790632], [35.38906, -80.787291], [35.38827, -80.783949], [35.39083, -80.780608], [35.392346, -80.777266], [35.39464, -80.773924], [35.397852, -80.770583], [35.39848, -80.767241], [35.38099, -80.7639], [35.38022, -80.760558], [35.37994, -80.757216], [35.38369, -80.753875], [35.38229, -80.750533], [35.38486, -80.747192], [35.384726, -80.74385], [35.38657, -80.740509], [35.38527, -80.737167], [35.40995, -80.733825], [35.40867, -80.730484], [35.40919, -80.727142], [35.41441, -80.723801], [35.4137, -80.720459], [35.428609, -80.717117], [35.428419, -80.713776], [35.42693, -80.710434], [35.42231, -80.707093], [35.420868, -80.703751], [35.41969, -80.700409], [35.41233, -80.697068], [35.4135, -80.693726], [35.41367, -80.690385], [35.41349, -80.687043], [35.412365, -80.683701], [35.43055, -80.68036], [35.4292, -80.677018], [35.42443, -80.673677], [35.42524, -80.670335], [35.42962, -80.666994], [35.43247, -80.663652], [35.43581, -80.66031], [35.43648, -80.656969], [35.43775, -80.653627], [35.43862, -80.650286], [35.43893, -80.646944], [35.43901, -80.643602], [35.43906, -80.640261], [35.438411, -80.640261], [35.43835, -80.643602], [35.438085, -80.646944], [35.2497, -80.650286], [35.25039, -80.653627], [35.250333, -80.656969], [35.25498, -80.66031], [35.25699, -80.663652], [35.25982, -80.666994], [35.26408, -80.670335], [35.27533, -80.673677], [35.27802, -80.677018], [35.27421, -80.68036], [35.27548, -80.683701], [35.27537, -80.687043], [35.2583, -80.690385], [35.2605, -80.693726], [35.25604, -80.697068], [35.25294, -80.700409], [35.25238, -80.703751], [35.252859, -80.707093], [35.24878, -80.710434], [35.24811, -80.713776], [35.23715, -80.717117], [35.24719, -80.720459], [35.22069, -80.723801], [35.22231, -80.727142], [35.22564, -80.730484], [35.230825, -80.733825], [35.22986, -80.737167], [35.22828, -80.740509], [35.22838, -80.74385], [35.224199, -80.747192], [35.23644, -80.750533], [35.23656, -80.753875], [35.24575, -80.757216], [35.24988, -80.760558], [35.248938, -80.7639], [35.23263, -80.767241], [35.230092, -80.770583], [35.22703, -80.773924], [35.22446, -80.777266], [35.22987, -80.780608], [35.23575, -80.783949], [35.23474, -80.787291], [35.2348, -80.790632], [35.23551, -80.793974], [35.23463, -80.797316], [35.23359, -80.800657], [35.23389, -80.803999], [35.2323, -80.80734], [35.23684, -80.810682], [35.23649, -80.814024], [35.24088, -80.817365], [35.239791, -80.820707], [35.23954, -80.824048], [35.22436, -80.82739], [35.22758, -80.830731], [35.228211, -80.834073], [35.2307, -80.837415], [35.23171, -80.840756], [35.23262, -80.844098], [35.23331, -80.847439], [35.23311, -80.850781], [35.22424, -80.854123], [35.22503, -80.857464], [35.22686, -80.860806], [35.222009, -80.864147], [35.221, -80.867489], [35.21503, -80.870831], [35.21127, -80.874172], [35.255, -80.877514], [35.25519, -80.880855], [35.24649, -80.884197], [35.2407, -80.887539], [35.24219, -80.89088], [35.243735, -80.894222], [35.24034, -80.897563], [35.24128, -80.900905], [35.240876, -80.904246], [35.23935, -80.907588], [35.238848, -80.91093], [35.23785, -80.914271], [35.23781, -80.917613], [35.237845, -80.920954], [35.238955, -80.924296], [35.23959, -80.927638], [35.25519, -80.930979], [35.258124, -80.911667], [35.26085, -80.89402], [35.263576, -80.893128], [35.266302, -80.887961], [35.269028, -80.88824], [35.271754, -80.89072], [35.27448, -80.897472], [35.277206, -80.896128], [35.279932, -80.89894], [35.282658, -80.90373], [35.285384, -80.90591], [35.28811, -80.86656], [35.290836, -80.86743], [35.293562, -80.857414], [35.296288, -80.859675], [35.299013, -80.856206], [35.301739, -80.8785], [35.304465, -80.879977], [35.307191, -80.8806], [35.309917, -80.878408], [35.312643, -80.8802], [35.315369, -80.864989], [35.318095, -80.86762], [35.320821, -80.86612], [35.323547, -80.86693], [35.326448, -80.930979], [35.327689, -80.930979]]
