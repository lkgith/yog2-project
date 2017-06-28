<div class="message-ranklist">
    <h2>视点</h2>
	 <ul>
        {% for item in ranklist %}
        <li>
            <p class="title">{{ item.title }}</p>
        </li>
        {% endfor %}
    </ul>
</div>
{% script %}
        require('./message.js')({
        	data: {{ ranklist|json|raw }},
        	title: 'test',
        	el: '.message-ranklist'
        });
    {% endscript %}