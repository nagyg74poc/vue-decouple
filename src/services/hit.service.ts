
import Vue from 'vue';

export class CustomerService {
    hits: any[] = [
        {
            from: 'default',
            val: 'X'
        }
    ];

    hit(from: string, val: string) {
        console.log('Service Hit: ', from, val);
        this.addHit(from, val);
    }

    addHit(from: string, val: string) {

        this.hits.push({ from, val });
    }
};