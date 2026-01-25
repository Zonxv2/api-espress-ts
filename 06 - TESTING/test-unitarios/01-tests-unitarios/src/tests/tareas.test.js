import { Tareas } from "../utils/tareas.js";
import { expect, assert } from 'chai'

describe('test unitario tareas', ()=>{
    it('Debería crear el contenedor de tareas vacío', ()=>{
        //etapa de preparacion
        const tareas = new Tareas();

        //etapa de ejecucion
        const listado = tareas.list();

        //etapa de afirmaciones
        expect(listado).to.have.lengthOf(0);
        
        assert.lengthOf(listado, 0);
    })

    it('Debería registrar una tarea', ()=>{
        const tareas = new Tareas()

        tareas.add('tarea 1')

        assert.strictEqual(tareas.list().length, 1);
    })

    it('Deberia cambiar el valor de la propiedad complete a true', ()=>{
        const tareas = new Tareas()

        tareas.add('tarea 2')

        tareas.complete('tarea 2')

        assert.deepStrictEqual(tareas.list(), [{title: 'tarea 2', complete: true}])
    })

    it('Deberia devolver error cuando la tarea a completar no existe', ()=>{
        const tareas = new Tareas()

        tareas.add('tarea 3')

        const fnTest = () =>{
            tareas.complete('asdsad')
        }

        assert.throws(fnTest, Error, 'Tarea no encontrada')
    }
)

})