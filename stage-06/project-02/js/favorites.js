export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
            .then(data => data.json())
            .then(({ login, name, public_repos, followers }) => ({
                login,
                name,
                public_repos,
                followers,
            }))
    }
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.load()

        GithubUser.search('alemon-ice').then(user => console.log({user}))
    }

    load() {
        // const entries = [
        //     {
        //         login: 'alemon-ice',
        //         name: 'Rafael dias',
        //         public_repos: 11,
        //         followers: 16
        //     },
        //     {
        //         login: 'torvalds',
        //         name: 'Linus Torvalds',
        //         public_repos: 7,
        //         followers: 208000
        //     }
        // ]
        const entries = JSON.parse(localStorage.getItem('@github-favorites:entries')) || []
        this.entries = entries
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
        this.entries = filteredEntries
        this.update()
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
        const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.actions').onclick = () => {
                const isOK = confirm('Tem certeja que deseja remover este usuário?')

                if (isOK) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        const content = `
            <td class="user">
                <img src="https://github.com/alemon-ice.png" alt="Imagem de alemon-ice">
                <a href="https://github.com/alemon-ice" target="_blank">
                    <p>Rafael Dias</p>
                    <span>alemon-ice</span>
                </a>
            </td>
            <td class="repositories">11</td>
            <td class="followers">16</td>
            <td class="actions">
                <button>&times;</button>
            </td>
        `

        tr.innerHTML = content

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}